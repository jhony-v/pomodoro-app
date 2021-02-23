import React from 'react';
import { css, styled } from '@pomodoro/design';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const CircleWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px auto',
  borderRadius: 'full',
  boxShadow:
    '10px 10px 20px rgba(20,20,20,.1), -10px -10px 30px rgba(30,40,100),5px 4px 10px rgba(0,0,0,.3)',
});

export default function CircleProgressBar({
  size,
  text,
  subtitle,
  onClickSubtitle,
  color,
}) {
  return (
    <CircleWrapper style={{ width: size + 'px', height: size + 'px' }}>
      <CircularProgressbarWithChildren
        value={40}
        styles={{
          root: {
            width: size + 'px',
            height: size + 'px',
          },
          path: {
            stroke: color,
            transition: '.3s',
          },
          trail: {
            stroke: 'transparent',
          },
        }}
        strokeWidth={3}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          })}
        >
          <span
            className={css({
              fontSize: '4rem',
              fontWeight: 'bold',
              color: 'normalText',
            })}
          >
            {text}
          </span>
          <span
            className={css({
              textTransform: 'uppercase',
              letterSpacing: '10px',
              color: 'normalText',
              cursor: 'pointer',
            })}
            onClick={onClickSubtitle}
          >
            {subtitle}
          </span>
        </div>
      </CircularProgressbarWithChildren>
    </CircleWrapper>
  );
}

CircleProgressBar.defaultProps = {
  size: 250,
};
