import React from 'react';
import BaseIcon from '../../components/BaseIcon';
import CircleProgressBar from './components/CircleProgressBar';
import TabOptions from './components/TabOptions';
import Title from './components/Title';
import { PomodoroWrapper } from './components/Wrappers';
import { AiTwotoneSetting } from 'react-icons/ai';
import { ui } from './models';
import ModalSettingsUI from './ui/ModalSettingsUI';
import TabOptionsUI from './ui/TabOptionsUI';
import CircleProgressTimerUI from './ui/CircleProgressTimerUI';

export default function Pomodoro() {
  return (
    <PomodoroWrapper>
      <Title />
      <TabOptionsUI />
      <CircleProgressTimerUI />
      <BaseIcon icon={AiTwotoneSetting} onClick={ui.openModal} />
      <ModalSettingsUI />
    </PomodoroWrapper>
  );
}
