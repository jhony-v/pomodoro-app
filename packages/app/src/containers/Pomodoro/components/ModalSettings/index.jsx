import React, { memo } from 'react';
import {
  ModalBody,
  Text,
  Divider,
  Wrapper,
  BaseButtonFloating,
} from './index.styles';
import { MdClose } from 'react-icons/md';
import EditInput from '../../../../components/EditInput';
import RoundAvatar from '../../../../components/RoundAvatar';
import Backdrop from '../../../../components/Backdrop';
import { css } from '@pomodoro/design';

function ModalSettings({
  onClose,
  onApplyNewTheme,
  onSelectTheme,
  currentTheme,
  themeColors,
  descriptionMinutes,
  changeTimerMinutes,
  themeSelected,
}) {
  return (
    <Backdrop>
      <ModalBody type="body">
        <Divider>
          <Wrapper variant="header">
            <Text font="title">Settings</Text>
            <div
              className="icon"
              onClick={onClose}
              role="button"
              aria-hidden="true"
              aria-label="close-settings"
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
                name={item.type}
                defaultValue={item.value}
                onKeyUp={changeTimerMinutes}
                type="number"
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
        <BaseButtonFloating css={css({ backgroundColor: currentTheme })} onClick={onApplyNewTheme}>
          Apply
        </BaseButtonFloating>
      </ModalBody>
    </Backdrop>
  );
}

export default memo(ModalSettings);
