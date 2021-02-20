import { styled } from '@pomodoro/design';
import React, { useCallback, useEffect, useState } from 'react';
import BaseButton from '../../../components/BaseButton';

const Wrapper = styled(BaseButton, {
  backgroundColor: 'primaryDark20',
  display: 'flex',
  alignItems: 'center',
});

const Option = styled(BaseButton, {
  fontWeight: 'bold',
  variants: {
    deactive: {
      true: {
        background: 'transparent',
        color: 'neutral',
      },
    },
  },
});

export default function TabOptions({
  variant = 'primary',
  options,
  dispatchOptionSelected,
}) {
  const [option, setOption] = useState({
    value: 1,
  });

  const onOptionSelected = useCallback(
    (key) => {
      setOption(key);
    },
    [setOption]
  );

  useEffect(() => dispatchOptionSelected(option), [option]);

  return (
    <Wrapper as="div">
      {options.map((item) => (
        <Option
          key={item.value}
          onClick={() => onOptionSelected(item)}
          variant={option.value === item.value && variant}
          deactive={option.value !== item.value}
        >
          {item.children}
        </Option>
      ))}
    </Wrapper>
  );
}
