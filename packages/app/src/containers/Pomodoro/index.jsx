import React from 'react';
import BaseButton from '../../components/BaseButton';
import CircleProgressBar from './components/CircleProgressBar';
import TabOptions from './components/TabOptions';
import Title from './components/Title';
import { PomodoroWrapper } from './components/Wrappers';

export default function Pomodoro() {
  return (
    <PomodoroWrapper>
      <Title />
      <TabOptions
        options={[
          {
            children: 'pomodoro',
            value: 1,
          },
          {
            children: 'short break',
            value: 2,
          },
          {
            children: 'long break',
            value: 3,
          },
        ]}
        dispatchOptionSelected={(e) => console.log(e)}
      />
      <CircleProgressBar text="10:35" subtitle="Pause"></CircleProgressBar>
    </PomodoroWrapper>
  );
}
