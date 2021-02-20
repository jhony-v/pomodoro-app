'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.styled = exports.css = void 0;

let _react = require('@stitches/react');

let _createStyled = (0, _react.createStyled)({
    tokens: {
      colors: {
        blackAlpha5: 'rgba(0, 0, 0, 0.05)',
        blackAlpha60: 'rgba(0, 0, 0, 0.60)',
        blackAlpha80: 'rgba(0, 0, 0, 0.80)',
        primary: '#3E54A3',
        primary10: '#2967B3',
        primary20: '#3B5897',
        secondary: '#FF7E7A',
        normalText: '#FFFFFF',
        darkText: '#rgb(20,20,20)',
        neutral: 'rgb(90,90,90)',
        colorOptionPrimary: '#FF7E7A',
        colorOptionSecondary: '#1CA0F2',
        colorOptionThird: '#ba68c8',
      },
      fontSizes: {
        small: '.9rem',
        regular: '1rem',
        medium: '1.2rem',
        big: '2rem',
      },
      radii: {
        small: '10px',
        medium: '60px',
        full: '100%',
      },
      space: {
        sp5: '5px',
        sp10: '10px',
        sp20: '20px',
      },
    },
    utils: {
      size: function size() {
        return function (value) {
          return {
            width: value,
            height: value,
          };
        };
      },
    },
  }),
  css = _createStyled.css,
  styled = _createStyled.styled;

exports.styled = styled;
exports.css = css;
