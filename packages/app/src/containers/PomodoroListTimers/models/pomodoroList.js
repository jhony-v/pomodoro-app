import { createApi, createEvent, createStore } from 'effector';

function pomodoroList() {
  const $listTimers = createStore([]);
  const $creatingTimer = createStore(false);
  const $newTimerData = createStore({
    title: '',
    description: '',
    durations: {
      normal: '',
      short: '',
      long: '',
    },
    color: '',
  });
  const $completedFields = $newTimerData.map(
    ({ title, description, color, durations }) => {
      const validateNotEmptyDurations =
        durations.normal !== '' &&
        durations.short !== '' &&
        durations.long !== '';
      return (
        title !== '' &&
        description !== '' &&
        color !== '' &&
        validateNotEmptyDurations
      );
    }
  );

  const updateNewTimerData = createEvent();
  const setDataInPomodoroList = createEvent();
  const resetCreatedNewTimerData = createEvent();
  const creatingApi = createApi($creatingTimer, {
    activeCreateNewTimer: () => true,
    deactiveCreateTimer: () => false,
  });

  $listTimers.on(setDataInPomodoroList, (_, payload) => payload);
  $newTimerData.on(updateNewTimerData, (prevState, { target }) => {
    const { name, value } = target;
    if (name.includes('duration')) {
      const [, durationName] = name.split('.');
      return {
        ...prevState,
        durations: {
          ...prevState.durations,
          [durationName]: value,
        },
      };
    }
    return {
      ...prevState,
      [name]: value,
    };
  });
  $creatingTimer.reset(resetCreatedNewTimerData);
  $newTimerData.reset(resetCreatedNewTimerData);

  return {
    $listTimers,
    $completedFields,
    setDataInPomodoroList,
    $newTimerData,
    $creatingTimer,
    updateNewTimerData,
    resetCreatedNewTimerData,
    ...creatingApi,
  };
}

export default pomodoroList();
