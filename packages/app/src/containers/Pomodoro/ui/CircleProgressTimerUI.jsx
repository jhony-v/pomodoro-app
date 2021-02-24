import { createStoreConsumer, useStore } from 'effector-react';
import React from 'react';
import CircleProgressBar from '../components/CircleProgressBar';
import { timer, ui } from '../models';

const FormatTime = createStoreConsumer(timer.$formatTime);
const Running = createStoreConsumer(timer.$running);

export default function CircleProgressTimerUI() {
  const currentTheme = useStore(ui.$currentheme);
  const baseColors = useStore(ui.$baseColors);
  const progressPercentaje = useStore(timer.$progressPercentaje);

  return (
    <CircleProgressBar
      value={progressPercentaje}
      color={baseColors[currentTheme]}
      text={<FormatTime>{(value) => value}</FormatTime>}
      subtitle={<Running>{(value) => (value ? 'Pause' : 'Start')}</Running>}
      onClickSubtitle={timer.onToggleRunning}
    />
  );
}
