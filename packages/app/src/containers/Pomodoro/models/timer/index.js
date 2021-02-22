import { combine, createApi, createEvent, createStore } from 'effector';
import { format } from 'fecha';

function timer({ initialSeconds = 0 } = {}) {
  // stores
  const $running = createStore(false);
  const $seconds = createStore(initialSeconds);
  const $runningCounter = combine([$running, $seconds]);
  const $formatTime = combine($seconds, (seconds) =>
    format(new Date(seconds * 1000), 'mm:ss')
  );

  // event actions
  const decrement = createEvent();
  const setTotalSeconds = createEvent();
  const resetCounter = createEvent();

  const runningApi = createApi($running, {
    onStart: () => true,
    onPause: () => false,
    onToggleRunning: (value) => !value,
  });

  $seconds
    .on(setTotalSeconds, (_, value) => value)
    .on(decrement, (value) => value - 1)
    .reset(resetCounter);

  $runningCounter.watch(([running, seconds]) => {
    if (seconds > 0 && running) {
      setTimeout(() => decrement(), 1000);
    }
    if (seconds === 0) {
      runningApi.onPause();
    }
  });

  return {
    $running,
    $seconds,
    $formatTime,
    setTotalSeconds,
    ...runningApi,
  };
}

export default timer();
