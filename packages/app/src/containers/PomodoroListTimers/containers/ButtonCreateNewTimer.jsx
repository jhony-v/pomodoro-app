import React from 'react'
import { useEvent, useStore } from 'effector-react'
import * as DataList from "../components/DataList"
import pomodoroList from '../models/pomodoroList'

export default function ButtonCreateNewTimer() {
  const creatingTimer = useStore(pomodoroList.$creatingTimer);
  const activeCreateNewTimer = useEvent(pomodoroList.activeCreateNewTimer);
  const deactiveCreateNewTimer = useEvent(pomodoroList.deactiveCreateTimer);

  const onCreateTimer = () => {
    if (creatingTimer) deactiveCreateNewTimer()
    else activeCreateNewTimer()
  }
  return (
    <DataList.CreateTimer onClick={onCreateTimer}>
      {creatingTimer ? "Cancel new timer" : "Add a new note to recent list"}
    </DataList.CreateTimer>
  )
}
