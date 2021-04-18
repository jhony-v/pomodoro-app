import React, { useEffect } from 'react'
import { useGetUserTimers } from '@pomodoro/app-service';
import pomodoroList from '../models/pomodoroList';
import { useStore } from 'effector-react';
import DataListTimerItem from '../components/DataListTimerItem';

export default function DataListTimer() {
  const { data } = useGetUserTimers()
  const pomodoroListTimers = useStore(pomodoroList.$listTimers);

  useEffect(() => {
    pomodoroList.setDataInPomodoroList(data || []);
  }, [data])

  return (
    <div>
      {pomodoroListTimers.map((timerItem) => <DataListTimerItem data={timerItem} key={timerItem._id} />)}
    </div>
  )
}
