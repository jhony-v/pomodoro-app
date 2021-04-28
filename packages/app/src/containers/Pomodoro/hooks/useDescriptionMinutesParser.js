import { listOptionstimer } from '../constants';
import useMinutesParser from './useMinutesParser';

export default function useDescriptionMinutesParser() {
  const timerMinutes = useMinutesParser();
  const dataDescriptionMinutes = timerMinutes.map((value, index) => {
    return {
      children: listOptionstimer[index],
      ...value,
    };
  });

  return dataDescriptionMinutes;
}
