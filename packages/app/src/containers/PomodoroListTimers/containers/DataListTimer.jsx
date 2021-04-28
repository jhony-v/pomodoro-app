import React, { useCallback, useEffect } from 'react'
import { useGetUserTimers } from '@pomodoro/app-service';
import pomodoroList from '../models/pomodoroList';
import { useStore } from 'effector-react';
import DataListTimerItem from '../components/DataListTimerItem';
import { timer, ui } from '../../Pomodoro/models';

export default function DataListTimer() {
  const { data } = useGetUserTimers()
  const pomodoroListTimers = useStore(pomodoroList.$listTimers);

  useEffect(() => {
    pomodoroList.setDataInPomodoroList(data || []);
  }, [data])

  const onTimerItemSelected = useCallback(({ color, durations }) => {
    ui.changeTheme(color)
    timer.changeTimerMinutes(durations)
  }, []);

  return (
    <div>
      {pomodoroListTimers.map((timerItem) => (
        <DataListTimerItem
          key={timerItem._id}
          data={timerItem}
          onTimerItemSelected={() => onTimerItemSelected(timerItem)} />
      ))}
    </div>
  )
}
