import React from 'react';
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
import { ui } from '../../models';

export default function ModalSettings({ onClose }) {
  const descriptionMinutes = useDescriptionMinutesParser();
  const themeColors = useStore(ui.$themeColors);
  const currentTheme = useStore(ui.$currentheme);
  const baseColors = useStore(ui.$baseColors);

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
                defaultValue={item.value}
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
                onClick={() => ui.changeTheme(theme)}
              >
                {currentTheme === baseColors[theme] && `✓`}
              </RoundAvatar>
            ))}
          </Wrapper>
        </Divider>
        <BaseButtonFloating>Apply</BaseButtonFloating>
      </Modal>
    </Modal>
  );
}
