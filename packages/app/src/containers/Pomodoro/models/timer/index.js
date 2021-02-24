import { combine, createApi, createEvent, createStore, sample } from 'effector';
import { secondsToMinutes } from '@pomodoro/utils';

function timer({ initialSeconds = 0 } = {}) {
  // stores
  const $running = createStore(false);
  const $seconds = createStore(initialSeconds);
  const $minutes = createStore(1);
  const $runningCounter = combine([$running, $seconds]);
  const $formatTime = combine($seconds, secondsToMinutes);
  const $timerMinutes = createStore({
    normal: 1,
    short: 5,
    long: 25,
  });

  const $progressPercentaje = combine(
    $minutes,
    $seconds,
    (minutes, seconds) => {
      minutes = minutes * 60;

      return 100 - ((seconds * 100) / minutes || 100);
    }
  );

  // event actions
  const decrement = createEvent();
  const setTotalSeconds = createEvent();
  const resetCounter = createEvent();
  const changeMinutes = createEvent();
  const changeTimerMinutes = createEvent();

  const runningApi = createApi($running, {
    onStart: () => true,
    onPause: () => false,
    onToggleRunning: (value) => !value,
  });

  $minutes.on(changeMinutes, (_, minutes) => minutes);
  $timerMinutes.on(changeTimerMinutes, (timerMinutes, { target }) => {
    const { name, value } = target;

    return {
      ...timerMinutes,
      [name]: value,
    };
  });

  $seconds
    .on(setTotalSeconds, (_, minutes) => {
      changeMinutes(minutes);

      return minutes * 60;
    })
    .on(decrement, (value) => value - 1)
    .reset(resetCounter);

  $runningCounter.watch(([running, seconds]) => {
    if (seconds > 0 && running) setTimeout(() => decrement(), 1000);
    if (seconds === 0) runningApi.onPause();
  });

  return {
    $running,
    $seconds,
    $formatTime,
    $timerMinutes,
    $progressPercentaje,
    setTotalSeconds,
    changeTimerMinutes,
    ...runningApi,
  };
}

export default timer();
