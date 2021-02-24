import { timer } from '../models';
import { useStore } from 'effector-react';

export default function useMinutesParser() {
  const timerMinutes = useStore(timer.$timerMinutes);

  return Object.keys(timerMinutes).map((timer) => {
    return {
      type: timer,
      value: timerMinutes[timer],
    };
  });
}
