import { useStore } from 'effector-react';
import React, { useCallback } from 'react';
import CircleProgressBar from '../components/CircleProgressBar';
import { timer, ui } from '../models';

const TitleFormatTime = () => {
  const formatTime = useStore(timer.$formatTime);

  return formatTime;
};
const SubtitleManager = () => {
  const running = useStore(timer.$running);
  const completed = useStore(timer.$completed);
  const onTimerManager = () => {
    if (completed) timer.resetCounter();
    else timer.onToggleRunning();
  };

  return (
    <div onClick={onTimerManager}>
      {completed ? 'RESET' : running ? 'PAUSE' : 'START'}
    </div>
  );
};

export default function CircleProgressTimerUI() {
  const currentTheme = useStore(ui.$currentheme);
  const baseColors = useStore(ui.$baseColors);
  const progressPercentaje = useStore(timer.$progressPercentaje);

  return (
    <CircleProgressBar
      value={progressPercentaje}
      color={baseColors[currentTheme]}
      text={<TitleFormatTime />}
      subtitle={<SubtitleManager />}
    />
  );
}
