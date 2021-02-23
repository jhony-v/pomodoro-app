import React from 'react';
import { useStore } from 'effector-react';
import { ui } from '../models';
import ModalSettings from '../components/ModalSettings';

export default function ModalSettingsUI() {
  const modalOpen = useStore(ui.$modal);

  return modalOpen ? <ModalSettings onClose={ui.closeModal} /> : null;
}
