import { styled } from '@pomodoro/design';

const RoundAvatar = styled('div', {
  borderRadius: 'full',
  size: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    bg: {
      default: {
        backgroundColor: 'blackAlpha5',
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
RoundAvatar.defaultProps = {
  bg: 'default',
};

export default RoundAvatar;
