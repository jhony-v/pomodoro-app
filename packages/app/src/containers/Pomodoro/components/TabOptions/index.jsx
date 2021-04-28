import { styled, css } from '@pomodoro/design';
import React, { useCallback, useEffect, useState } from 'react';
import BaseButton from '../../../../components/BaseButton';

const Option = styled(BaseButton, {
  ':disabled': {
    backgroundColor: 'transparent',
    color: 'neutral',
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
  color,
  options,
  disabled,
  dispatchOptionSelected,
}) {
  const [option, setOption] = useState({
    key: 0,
    data: {
      type: 'normal',
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
          css={css({
            backgroundColor: option.key === key ? color : "transparent",
            color: "white"
          })}
          disabled={disabled}
        >
          {children}
        </Option>
      ))}
    </Wrapper>
  );
}
