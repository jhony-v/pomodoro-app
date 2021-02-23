import { css } from '@pomodoro/design';

css.global({
  '*': {
    fontFamily: 'Arial',
    boxSizing: 'border-box',
    margin: 0,
  },
  'input,button,textarea': {
    outline: 'none',
    border: 'none',
    fontFamily: 'Arial',
  },
  'body,html': {
    width: '100%',
    height: '100%',
  },
  body: {
    background: 'primaryDark',
    display: 'flex',
  },
  '#__app__': {
    display: 'flex',
    width: '100%',
  },
});
