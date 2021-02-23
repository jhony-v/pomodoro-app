import { styled } from '@pomodoro/design';
import BaseButton from '../../../../components/BaseButton';
import RoundAvatar from '../../../../components/RoundAvatar';

export const Modal = styled('div', {
  variants: {
    type: {
      backdrop: {
        backgroundColor: 'blackAlpha60',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
      body: {
        backgroundColor: 'card',
        borderRadius: 'small',
        width: '450px',
        position: 'relative',
      },
    },
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  variants: {
    variant: {
      header: {
        padding: 'sp20',
      },
      grid: {
        display: 'grid',
        gap: 'sp10',
        gridTemplateColumns: 'repeat(3,1fr)',
      },
      inline: {
        width: 'auto',
        [RoundAvatar]: {
          marginRight: 'sp10',
        },
      },
    },
    spacing: {
      10: {
        marginTop: 'sp10',
        marginBottom: 'sp10',
      },
    },
  },
});

export const BaseButtonFloating = styled(BaseButton, {
  color: 'normalText',
  display: 'block',
  width: 'auto',
  margin: 'auto auto -20px',
  padding: 'sp10 30px',
});

export const Divider = styled('div', {
  borderBottom: '1px solid rgba(0,0,0,.1)',
  display: 'flex',
  variants: {
    variant: {
      row: {
        margin: '20px',
        padding: '10px 0',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      col: {
        margin: '20px',
        padding: '10px 0',
        flexDirection: 'column',
      },
    },
  },
});

export const Text = styled('span', {
  fontWeight: 'bold',
  variants: {
    font: {
      title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 'medium',
      },
      subtitle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 'small',
      },
      clamp: {
        fontWeight: 'bold',
        fontSize: 'small',
        color: 'neutral',
      },
    },
  },
});
