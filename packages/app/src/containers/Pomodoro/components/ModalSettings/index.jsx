import React, { useCallback, useState } from 'react';
import {
  Modal,
  Text,
  Divider,
  Wrapper,
  BaseButtonFloating,
} from './index.styles';
import { MdClose } from 'react-icons/md';
import EditInput from '../../../../components/EditInput';
import RoundAvatar from '../../../../components/RoundAvatar';
import useDescriptionMinutesParser from '../../hooks/useDescriptionMinutesParser';
import { useStore } from 'effector-react';
import { timer, ui } from '../../models';

export default function ModalSettings({ onClose }) {
  const descriptionMinutes = useDescriptionMinutesParser();
  const themeColors = useStore(ui.$themeColors);
  const currentTheme = useStore(ui.$currentheme);
  const [themeSelected, setThemeSelected] = useState(() => currentTheme);
  const onApplyNewTheme = () => {
    ui.changeTheme(themeSelected);
    ui.closeModal();
  };

  const onSelectTheme = useCallback(
    (theme) => {
      setThemeSelected(theme);
    },
    [setThemeSelected]
  );

  return (
    <Modal type="backdrop">
      <Modal type="body">
        <Divider>
          <Wrapper variant="header">
            <Text font="title">Settings</Text>
            <div
              className="icon"
              onClick={onClose}
              role="button"
              aria-label="close"
            >
              <MdClose />
            </div>
          </Wrapper>
        </Divider>
        <Divider variant="col">
          <Text font="subtitle">TIME (MINUTES)</Text>
          <Wrapper spacing={10} variant="grid">
            {descriptionMinutes.map((item, key) => (
              <EditInput
                key={key}
                subtitle={item.children}
                type="number"
                name={item.name}
                defaultValue={item.value}
                onKeyUp={timer.changeTimerMinutes}
              />
            ))}
          </Wrapper>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">COLOR</Text>
          <Wrapper variant="inline">
            {themeColors.map((theme, index) => (
              <RoundAvatar
                key={index}
                bg={theme}
                onClick={() => onSelectTheme(theme)}
              >
                {themeSelected === theme && `✓`}
              </RoundAvatar>
            ))}
          </Wrapper>
        </Divider>
        <BaseButtonFloating variant={currentTheme} onClick={onApplyNewTheme}>
          Apply
        </BaseButtonFloating>
      </Modal>
    </Modal>
  );
}
