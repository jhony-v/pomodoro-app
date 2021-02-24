import React from 'react';
import { css } from '@pomodoro/design';

const h1Classnames = css({
  fontSize: 'medium',
  color: 'normalText',
  textAlign: 'center',
  marginBottom: 'sp20',
  textShadow: '0 6px 10px rgba(50,60,80,.5)',
});

export default function Title() {
  return <h1 className={h1Classnames}>pomodoro</h1>;
}
