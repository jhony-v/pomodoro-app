import React from 'react';
import { css, styled } from '@pomodoro/design';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const CircleWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
  borderRadius: 'full',
  boxShadow: `10px 10px 20px rgba(20,20,20,.1), 
    -10px -10px 30px #272a55,
    5px 4px 10px rgba(0,0,0,.1), 
    50px 30px 60px rgba(0,0,0,.3)
    `,
});

const Text = styled("span", {
  variants: {
    variant: {
      title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'normalText',

      },
      subtitle: {
        textTransform: 'uppercase',
        marginTop: 'sp20',
        letterSpacing: '10px',
        color: 'normalText',
        lphone: {
          cursor: 'pointer',
        }
      }
    }
  }
})

export default function CircleProgressBar({
  size,
  text,
  subtitle,
  color,
  value,
  minValue,
  maxValue,
}) {
  const progressSize = size - 20;

  const circularStyles = {
    root: {
      width: progressSize + 'px',
      height: progressSize + 'px',
    },
    path: {
      stroke: color,
      transition: '.3s',
    },
    trail: {
      stroke: 'transparent',
    },
  }
  return (
    <CircleWrapper style={{ width: size + 'px', height: size + 'px' }}>
      <CircularProgressbarWithChildren
        value={value}
        maxValue={maxValue}
        minValue={minValue}
        strokeWidth={3}
        styles={circularStyles}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          })}
        >
          <Text variant="title">
            {text}
          </Text>
          <Text variant="subtitle">
            {subtitle}
          </Text>
        </div>
      </CircularProgressbarWithChildren>
    </CircleWrapper>
  );
}

CircleProgressBar.defaultProps = {
  size: 250,
};
