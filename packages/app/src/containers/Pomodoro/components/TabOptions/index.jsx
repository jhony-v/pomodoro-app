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
    value: 0,
  });

  const onOptionSelected = useCallback(
    (value) => {
      setOption(value);
    },
    [setOption]
  );

  useEffect(() => {
    onOptionSelected({
      key: 0,
      value: options[0].value,
    });
  }, []);

  useEffect(() => dispatchOptionSelected(option.value), [option]);

  return (
    <Wrapper as="div">
      {options.map((item, key) => (
        <Option
          key={key}
          onClick={() => onOptionSelected({ key, value: item.value })}
          variant={option.key === key && variant}
          deactive={option.key !== key}
          disabled={disabled}
        >
          {item.children}
        </Option>
      ))}
    </Wrapper>
  );
}
