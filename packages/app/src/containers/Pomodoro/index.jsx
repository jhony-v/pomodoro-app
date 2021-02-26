import React, { lazy, Suspense } from 'react';
import BaseIcon from '../../components/BaseIcon';
import Title from './components/Title';
import { PomodoroWrapper } from './components/Wrappers';
import { AiTwotoneSetting } from 'react-icons/ai';
import { ui } from './models';
import TabOptionsUI from './ui/TabOptionsUI';
import CircleProgressTimerUI from './ui/CircleProgressTimerUI';

const AsyncModalSettingsUI = lazy(() => import('./ui/ModalSettingsUI'));

export default function Pomodoro() {
  return (
    <PomodoroWrapper>
      <Title />
      <TabOptionsUI />
      <CircleProgressTimerUI />
      <BaseIcon icon={AiTwotoneSetting} onClick={ui.openModal} arial-hidden="true" aria-label="open-settings" role="button" />
      <Suspense fallback={null}>
        <AsyncModalSettingsUI />
      </Suspense>
    </PomodoroWrapper>
  );
}
