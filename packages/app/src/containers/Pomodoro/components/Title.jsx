import React from 'react';
import { css } from '@pomodoro/design';

const h1Classnames = css({
  fontSize: 'medium',
  color: 'normalText',
  textAlign: 'center',
  marginBottom: 'sp20',
});

export default function Title() {
  return <h1 className={h1Classnames}>pomodoro</h1>;
}
