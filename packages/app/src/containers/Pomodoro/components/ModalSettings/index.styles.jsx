import { styled } from '@pomodoro/design';

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
        overflow: 'hidden',
      },
    },
  },
});

export const WrapperModal = styled('div', {
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
    },
    spacing: {
      10: {
        marginTop: 'sp10',
        marginBottom: 'sp10',
      },
    },
  },
});

export const Divider = styled('div', {
  borderBottom: '1px solid silver',
  padding: '10px 0',
  variants: {
    variant: {
      row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px',
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
