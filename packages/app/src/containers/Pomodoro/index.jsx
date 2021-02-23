import React from 'react';
import BaseIcon from '../../components/BaseIcon';
import CircleProgressBar from './components/CircleProgressBar';
import TabOptions from './components/TabOptions';
import Title from './components/Title';
import { PomodoroWrapper } from './components/Wrappers';
import { AiTwotoneSetting } from 'react-icons/ai';
import { timer } from './models';
import { createStoreConsumer, useStore } from 'effector-react';
import ModalSettings from './components/ModalSettings';

const FormatTime = createStoreConsumer(timer.$formatTime);
const Running = createStoreConsumer(timer.$running);

const ContainerTabOptions = () => {
  const running = useStore(timer.$running);

  return (
    <TabOptions
      options={[
        {
          children: 'pomodoro',
          value: 10,
        },
        {
          children: 'short break',
          value: 120,
        },
        {
          children: 'long break',
          value: 60 * 3,
        },
      ]}
      dispatchOptionSelected={(value) => {
        timer.setTotalSeconds(value);
      }}
      disabled={running}
    />
  );
};

export default function Pomodoro() {
  return (
    <PomodoroWrapper>
      <Title />
      <ContainerTabOptions />
      <CircleProgressBar
        text={<FormatTime>{(value) => value}</FormatTime>}
        subtitle={<Running>{(value) => (value ? 'Pause' : 'Start')}</Running>}
        onClickSubtitle={timer.onToggleRunning}
      />
      <BaseIcon icon={AiTwotoneSetting} />
      <ModalSettings />
    </PomodoroWrapper>
  );
}
