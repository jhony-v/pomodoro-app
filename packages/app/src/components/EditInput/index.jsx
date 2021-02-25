import React, { forwardRef } from 'react';
import { styled } from '@pomodoro/design';

const Text = styled('label', {
  color: 'neutral',
  fontWeight: 'bold',
  fontSize: 'small',
});

const Input = styled('input', {
  borderRadius: 'small',
  padding: 'sp10',
  width: '100%',
  fontWeight: 'bold',
  backgroundColor: 'blackAlpha5',
  marginTop: 'sp10',
  fontFamily: 'arial',
});

const Wrapper = styled('div', {
  width: '100%',
});

const EditInput = forwardRef(({ subtitle, ...restProps }, ref) => {
  return (
    <Wrapper>
      <Text id={subtitle} htmlFor={subtitle}>
        {subtitle}
      </Text>
      <Input ref={ref} {...restProps} />
    </Wrapper>
  );
});

export default EditInput;
