'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.styled = exports.css = exports.colorsBase = void 0;

let _react = require('@stitches/react');

function ownKeys(object, enumerableOnly) {
  let keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

let colorsBase = {
  colorOptionPrimary: '#FF7E7A',
  colorOptionSecondary: '#1CA0F2',
  colorOptionThird: '#ba68c8',
};
exports.colorsBase = colorsBase;

let _createStyled = (0, _react.createStyled)({
    tokens: {
      colors: _objectSpread(
        {
          blackAlpha5: 'rgba(0, 0, 0, 0.05)',
          blackAlpha60: 'rgba(0, 0, 0, 0.60)',
          blackAlpha80: 'rgba(0, 0, 0, 0.80)',
          primary: '#3E54A3',
          primary10: '#2967B3',
          primary20: '#3B5897',
          primaryDark: 'rgb(10,20,50)',
          primaryDark20: 'rgb(5,10,30)',
          secondary: '#FF7E7A',
          normalText: '#FFFFFF',
          darkText: '#rgb(20,20,20)',
          neutral: 'rgb(90,90,90)',
        },
        colorsBase
      ),
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
