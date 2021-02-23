import React from 'react';
import { Modal, Text, Divider, WrapperModal } from './index.styles';
import { MdClose } from 'react-icons/md';
import { css } from '@pomodoro/design';
import EditInput from '../../../../components/EditInput';

export default function ModalSettings() {
  return (
    <Modal type="backdrop">
      <Modal type="body">
        <Divider>
          <WrapperModal variant="header">
            <Text font="title">Settings</Text>
            <div className="icon">
              <MdClose />
            </div>
          </WrapperModal>
        </Divider>
        <Divider variant="row">
          <div className={css({ width: '100%' })}>
            <Text font="subtitle">TIME (MINUTES)</Text>
            <WrapperModal spacing={10} variant="grid">
              <EditInput subtitle="pomodoro" type="number" />
              <EditInput subtitle="short break" type="number" />
              <EditInput subtitle="link break" type="number" />
            </WrapperModal>
          </div>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">FONT</Text>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">COLOR</Text>
        </Divider>
      </Modal>
    </Modal>
  );
}
