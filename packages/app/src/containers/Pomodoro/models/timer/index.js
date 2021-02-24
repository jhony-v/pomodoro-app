import { combine, createApi, createEvent, createStore, sample } from 'effector';
import { secondsToMinutes } from '@pomodoro/utils';

function timer({
  initialSeconds = 0,
  initialMinutes = { type: 'pomodoro', value: 1 },
} = {}) {
  /* --------------------------------- stores --------------------------------- */

  const $running = createStore(false);
  const $minutes = createStore(initialMinutes);
  const $seconds = combine($minutes, (minutes) => {
    return minutes.value * 60;
  });
  const $runningCounter = combine([$running, $seconds, $minutes]);
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
      return 100 - ((seconds * 100) / (minutes.value * 60) || 100);
    }
  );

  /* ------------------------------ event actions ----------------------------- */

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

  $minutes.on(changeMinutes, (_, payload) => payload);
  $timerMinutes.on(changeTimerMinutes, (timerMinutes, { target }) => {
    const { name: type, value } = target;
    changeMinutes({
      type,
      value: Number(value),
    });

    return {
      ...timerMinutes,
      [type]: Number(value),
    };
  });

  $seconds
    .on(setTotalSeconds, (_, payload) => {
      changeMinutes(payload);

      return payload.value * 60;
    })
    .on(decrement, (value) => value - 1)
    .reset(resetCounter);

  $runningCounter.watch(([running, seconds, minutes]) => {
    if (seconds > 0 && running) setTimeout(() => decrement(), 1000);
    if (seconds === 0) {
      runningApi.onPause();
      setTotalSeconds(minutes);
    }
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
