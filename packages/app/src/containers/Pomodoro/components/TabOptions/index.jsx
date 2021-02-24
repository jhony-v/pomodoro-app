import { styled } from '@pomodoro/design';
import React, { useCallback, useEffect, useState } from 'react';
import BaseButton from '../../../../components/BaseButton';

const Option = styled(BaseButton, {
  ':disabled': {
    backgroundColor: 'transparent',
    color: 'neutral',
  },
  variants: {
    deactive: {
      true: {
        background: 'transparent',
        color: 'neutral',
      },
    },
  },
});

const Wrapper = styled(BaseButton, {
  backgroundColor: 'primaryDark20',
  display: 'flex',
  alignItems: 'center',
  marginTop: 3,
  marginBottom: 3,
});

export default function TabOptions({
  variant = 'primary',
  options,
  disabled,
  dispatchOptionSelected,
}) {
  const [option, setOption] = useState({
    key: 0,
    data: {
      type: 'pomodoro',
      value: 1,
    },
  });

  const onOptionSelected = useCallback(
    (value) => {
      setOption(value);
    },
    [setOption]
  );

  useEffect(() => {
    dispatchOptionSelected(option.data);
  }, [option]);

  return (
    <Wrapper as="div">
      {options.map(({ type, value, children }, key) => (
        <Option
          key={key}
          onClick={() => onOptionSelected({ key, data: { type, value } })}
          variant={option.key === key && variant}
          deactive={option.key !== key}
          disabled={disabled}
        >
          {children}
        </Option>
      ))}
    </Wrapper>
  );
}
