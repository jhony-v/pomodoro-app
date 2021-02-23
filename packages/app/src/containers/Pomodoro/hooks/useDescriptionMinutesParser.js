import useMinutesParser from './useMinutesParser';

const optionsName = ['pomodoro', 'short break', 'long break'];
export default function useDescriptionMinutesParser() {
  const timerMinutes = useMinutesParser();
  const dataDescriptionMinutes = timerMinutes.map((value, index) => {
    return {
      children: optionsName[index],
      ...value,
    };
  });

  return dataDescriptionMinutes;
}
