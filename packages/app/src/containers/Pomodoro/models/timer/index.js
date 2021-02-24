import { combine, createApi, createEvent, createStore, sample } from 'effector';
import { secondsToMinutes } from '@pomodoro/utils';

function timer() {
  /* --------------------------------- stores --------------------------------- */

  const $completed = createStore(false);
  const $running = createStore(false);
  const $minutes = createStore({ type: 'pomodoro', value: 1 });
  const $seconds = combine($minutes, (minutes) => {
    return minutes.value * 60;
  });
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
      return 100 - (seconds * 100) / (minutes.value * 60);
    }
  );

  /* ------------------------------ event actions ----------------------------- */

  const decrement = createEvent();
  const setTotalSeconds = createEvent();
  const resetCounter = createEvent();
  const changeMinutes = createEvent();
  const changeTimerMinutes = createEvent();

  const completedApi = createApi($completed, {
    onReset: () => false,
    onSuccess: () => true,
  });
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

  $completed.watch((completed) => {
    const audio = new Audio();
    audio.src = require('../../assets/alarm.mp3').default;
    if (completed) {
      audio.play();
    } else {
      audio.currentTime = 0;
      audio.pause();
    }
  });
  $runningCounter.watch(([running, seconds]) => {
    if (seconds > 0 && running) setTimeout(() => decrement(), 1000);
    if (seconds === 0 && running) {
      runningApi.onPause();
      completedApi.onSuccess();
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
