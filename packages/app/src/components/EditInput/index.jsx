import React from 'react';
import { styled } from '@pomodoro/design';

const Text = styled('span', {
  color: 'neutral',
  fontWeight: 'bold',
});

const Input = styled('input', {
  borderRadius: 'small',
  padding: 'sp10',
  width: '100%',
  fontWeight: 'bold',
});

const Wrapper = styled('div', {
  [`& ${Text}`]: {
    marginBottom: 10,
  },
});

export default function EditInput({ subtitle }) {
  return (
    <Wrapper>
      <Text>{subtitle}</Text>
      <Input />
    </Wrapper>
  );
}
