import React from 'react';
import BaseIcon from '../../components/BaseIcon';
import CircleProgressBar from './components/CircleProgressBar';
import TabOptions from './components/TabOptions';
import Title from './components/Title';
import { PomodoroWrapper } from './components/Wrappers';
import { AiTwotoneSetting } from 'react-icons/ai';
import { timer, ui } from './models';
import { createStoreConsumer, useStore } from 'effector-react';
import ModalSettingsUI from './ui/ModalSettingsUI';
import useDescriptionMinutesParser from './hooks/useDescriptionMinutesParser';

const FormatTime = createStoreConsumer(timer.$formatTime);
const Running = createStoreConsumer(timer.$running);

const ContainerTabOptions = () => {
  const running = useStore(timer.$running);
  const data = useDescriptionMinutesParser();

  return (
    <TabOptions
      options={data}
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
      <BaseIcon icon={AiTwotoneSetting} onClick={ui.openModal} />
      <ModalSettingsUI />
    </PomodoroWrapper>
  );
}
