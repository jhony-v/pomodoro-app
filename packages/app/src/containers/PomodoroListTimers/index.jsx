import React from 'react'
import * as DataList from "./components/DataList"
import DataListITimerItem from './components/DataListITimerItem'

const PomodoroListTimers = () => {
  return (
    <DataList.Wrapper>
      <DataList.Body>
        <DataListITimerItem data={{}} />
      </DataList.Body>
      <DataList.Footer>
        <DataList.CreateTimer>
          Add a new note to recent list
        </DataList.CreateTimer>
      </DataList.Footer>
    </DataList.Wrapper>
  )
}

export default PomodoroListTimers
