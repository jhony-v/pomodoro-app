import React from 'react';
import { styled } from '@pomodoro/design';

const Iconic = styled('span', {
  display: 'inline-block',
  color: 'neutral',
  alignItems: 'center',
  transition: '.3s',
  variants: {
    active: {
      true: {
        color: 'normalText',
      },
    },
  },
});

export default function BaseIcon({ icon: IconComponent, onClick, active }) {
  return (
    <Iconic onClick={onClick} active={active}>
      <IconComponent size={25} />
    </Iconic>
  );
}
