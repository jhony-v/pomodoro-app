import React, { useEffect, useRef } from 'react';
import { css, styled } from '@pomodoro/design';

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
}) {
  const circleRef = useRef();
  useEffect(() => {
    const fill = Math.floor((size * 2 * Math.PI) / 2);
    circleRef.current.style.strokeDasharray = fill;
    circleRef.current.style.strokeDashoffset = (100 - 50 / 100) * fill;
  }, []);

  return (
    <CircleWrapper style={{ width: size + 'px', height: size + 'px' }}>
      <svg width={size} height={size}>
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          className={css({ stroke: 'colorOptionPrimary' })}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          strokeLinecap="round"
          fill="transparent"
          strokeWidth="7"
        />
        <text
          y={size / 2}
          style={{ fontSize: '4rem', fontWeight: 'bold' }}
          textAnchor="middle"
          fill="white"
          x="50%"
        >
          {text}
        </text>
        <text
          fill="white"
          x="50%"
          y={size - 80}
          textAnchor="middle"
          style={{ textTransform: 'uppercase', letterSpacing: '10px' }}
          onClick={onClickSubtitle}
        >
          {subtitle}
        </text>
      </svg>
    </CircleWrapper>
  );
}

CircleProgressBar.defaultProps = {
  size: 250,
};
