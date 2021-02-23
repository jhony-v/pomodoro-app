import { styled } from '@pomodoro/design';

export default styled('div', {
  borderRadius: 'full',
  size: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    bg: {
      default: {
        backgroundColor: 'neutral',
      },
      primary: {
        backgroundColor: 'primary',
      },
      secondary: {
        backgroundColor: 'secondary',
      },
      third: {
        backgroundColor: 'third',
      },
    },
  },
});
