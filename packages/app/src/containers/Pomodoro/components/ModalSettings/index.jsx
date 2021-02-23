import React from 'react';
import {
  Modal,
  Text,
  Divider,
  WrapperModal,
  BaseButtonFloating,
} from './index.styles';
import { MdClose } from 'react-icons/md';
import EditInput from '../../../../components/EditInput';
import BaseButton from '../../../../components/BaseButton';

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
        <Divider variant="col">
          <Text font="subtitle">TIME (MINUTES)</Text>
          <WrapperModal spacing={10} variant="grid">
            <EditInput subtitle="pomodoro" type="number" />
            <EditInput subtitle="short break" type="number" />
            <EditInput subtitle="link break" type="number" />
          </WrapperModal>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">FONT</Text>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">COLOR</Text>
        </Divider>
        <BaseButtonFloating>Apply</BaseButtonFloating>
      </Modal>
    </Modal>
  );
}
