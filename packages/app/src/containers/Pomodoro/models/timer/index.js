import { combine, createApi, createEvent, createStore } from 'effector';
import { secondsToMinutes } from '@pomodoro/utils';

function timer({ initialSeconds = 0 } = {}) {
  // stores
  const $running = createStore(false);
  const $seconds = createStore(initialSeconds);
  const $runningCounter = combine([$running, $seconds]);
  const $formatTime = combine($seconds, secondsToMinutes);

  const $timerMinutes = createStore({
    normal: 1,
    short: 5,
    long: 25,
  });

  // event actions
  const decrement = createEvent();
  const setTotalSeconds = createEvent();
  const resetCounter = createEvent();
  const changeTimerMinutes = createEvent();

  const runningApi = createApi($running, {
    onStart: () => true,
    onPause: () => false,
    onToggleRunning: (value) => !value,
  });

  $timerMinutes.on(changeTimerMinutes, (timerMinutes, { target }) => {
    const { name, value } = target;

    return {
      ...timerMinutes,
      [name]: value,
    };
  });

  $seconds
    .on(setTotalSeconds, (_, minutes) => minutes * 60)
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
    setTotalSeconds,
    changeTimerMinutes,
    ...runningApi,
  };
}

export default timer();
