import { useAutoCreateAnonymousUser } from '@pomodoro/app-service'
import React from 'react'
import * as DataList from "./components/DataList"
import ButtonCreateNewTimer from './containers/ButtonCreateNewTimer'
import CreateNewTimer from './containers/CreateNewTimer'
import DataListTimer from './containers/DataListTimer'

const PomodoroListTimers = () => {
  useAutoCreateAnonymousUser()
  return (
    <DataList.Wrapper>
      <DataList.Body>
        <DataListTimer />
        <CreateNewTimer />
      </DataList.Body>
      <DataList.Footer>
        <ButtonCreateNewTimer />
      </DataList.Footer>
    </DataList.Wrapper>
  )
}

export default PomodoroListTimers
