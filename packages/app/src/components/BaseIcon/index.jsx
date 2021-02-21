import React from 'react';
import { styled } from '@pomodoro/design';

const Iconic = styled('span', {
  display: 'inline-block',
  color: 'neutral',
  variants: {
    active: {
      true: {
        color: 'normalText',
      },
    },
  },
});

export default function BaseIcon({ children, icon: IconComponent }) {
  return (
    <Iconic>
      <IconComponent />
      {children}
    </Iconic>
  );
}
