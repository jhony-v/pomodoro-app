import React, { useCallback, useState } from 'react';
import { useStore } from 'effector-react';
import { timer, ui } from '../models';
import ModalSettings from '../components/ModalSettings';
import useDescriptionMinutesParser from '../hooks/useDescriptionMinutesParser';

export default function ModalSettingsUI() {
  const modalOpen = useStore(ui.$modal);
  const themeColors = useStore(ui.$themeColors);
  const currentTheme = useStore(ui.$currentheme);
  const descriptionMinutes = useDescriptionMinutesParser();
  const [themeSelected, setThemeSelected] = useState(() => currentTheme);

  const onApplyNewTheme = () => {
    ui.changeTheme(themeSelected);
    ui.closeModal();
  };

  const onSelectTheme = useCallback(setThemeSelected, [setThemeSelected]);

  return modalOpen ? (
    <ModalSettings
      onClose={ui.closeModal}
      currentTheme={currentTheme}
      themeColors={themeColors}
      descriptionMinutes={descriptionMinutes}
      themeSelected={themeSelected}
      onApplyNewTheme={onApplyNewTheme}
      changeTimerMinutes={timer.changeTimerMinutes}
      onSelectTheme={onSelectTheme}
    />
  ) : null;
}
