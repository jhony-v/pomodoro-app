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

export default function ModalSettings() {
  return (
    <Modal type="backdrop">
      <Modal type="body">
        <Divider>
          <Wrapper variant="header">
            <Text font="title">Settings</Text>
            <div className="icon">
              <MdClose />
            </div>
          </Wrapper>
        </Divider>
        <Divider variant="col">
          <Text font="subtitle">TIME (MINUTES)</Text>
          <Wrapper spacing={10} variant="grid">
            <EditInput subtitle="pomodoro" type="number" />
            <EditInput subtitle="short break" type="number" />
            <EditInput subtitle="link break" type="number" />
          </Wrapper>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">FONT</Text>
          <Wrapper variant="inline">
            <RoundAvatar></RoundAvatar>
            <RoundAvatar></RoundAvatar>
            <RoundAvatar></RoundAvatar>
          </Wrapper>
        </Divider>
        <Divider variant="row">
          <Text font="subtitle">COLOR</Text>
          <Wrapper variant="inline">
            <RoundAvatar bg="primary"></RoundAvatar>
            <RoundAvatar bg="secondary"></RoundAvatar>
            <RoundAvatar bg="third"></RoundAvatar>
          </Wrapper>
        </Divider>
        <BaseButtonFloating>Apply</BaseButtonFloating>
      </Modal>
    </Modal>
  );
}
