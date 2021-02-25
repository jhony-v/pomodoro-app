import React, { lazy, useCallback, useState, Suspense } from 'react';
import { useStore } from 'effector-react';
import { timer, ui } from '../models';
import useDescriptionMinutesParser from '../hooks/useDescriptionMinutesParser';
import Backdrop from '../../../components/Backdrop';
import { Loading } from '../components/ModalSettings/index.styles';

const AsyncModalSettings = lazy(() => import('../components/ModalSettings'));

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
    <Suspense
      fallback={
        <Backdrop>
          <Loading />
        </Backdrop>
      }
    >
      <AsyncModalSettings
        onClose={ui.closeModal}
        currentTheme={currentTheme}
        themeColors={themeColors}
        descriptionMinutes={descriptionMinutes}
        themeSelected={themeSelected}
        onApplyNewTheme={onApplyNewTheme}
        changeTimerMinutes={timer.changeTimerMinutes}
        onSelectTheme={onSelectTheme}
      />
    </Suspense>
  ) : null;
}
