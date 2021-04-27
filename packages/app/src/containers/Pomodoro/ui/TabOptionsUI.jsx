import { useStore } from 'effector-react';
import React from 'react';
import TabOptions from '../components/TabOptions';
import useDescriptionMinutesParser from '../hooks/useDescriptionMinutesParser';
import { timer, ui } from '../models';

const TabOptionsUI = () => {
  const running = useStore(timer.$running);
  const data = useDescriptionMinutesParser();
  const currentTheme = useStore(ui.$currentheme);

  return (
    <TabOptions
      options={data}
      color={currentTheme}
      disabled={running}
      dispatchOptionSelected={(payload) => {
        timer.setTotalSeconds(payload);
      }}
    />
  );
};

export default TabOptionsUI;
