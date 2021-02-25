(self["webpackChunk_pomodoro_app"] = self["webpackChunk_pomodoro_app"] || []).push([[179],{

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9923c5fe07987d4c526c0f8b6d31c38d.mp3");

/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/jsx.js
var jsx = __webpack_require__(135);
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(784);
// EXTERNAL MODULE: ../../node_modules/react-dom/index.js
var react_dom = __webpack_require__(316);
// EXTERNAL MODULE: ../design/dist/stitches.config.js
var stitches_config = __webpack_require__(941);
;// CONCATENATED MODULE: ./src/style/globalTheme.js

stitches_config/* css.global */.iv.global({
  '*': {
    fontFamily: 'Arial',
    boxSizing: 'border-box',
    margin: 0
  },
  'input,button,textarea': {
    outline: 'none',
    border: 'none',
    fontFamily: 'Arial'
  },
  'body,html': {
    width: '100%',
    height: '100%'
  },
  body: {
    background: 'primaryDark',
    display: 'flex'
  },
  '#__app__': {
    display: 'flex',
    width: '100%'
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
;// CONCATENATED MODULE: ./src/components/BaseIcon/index.jsx




var Iconic = (0,stitches_config/* styled */.zo)('span', {
  display: 'inline-block',
  color: 'neutral',
  alignItems: 'center',
  transition: '.3s',
  variants: {
    active: defineProperty_default()({}, true, {
      color: 'normalText'
    })
  }
});
function BaseIcon(_ref) {
  var IconComponent = _ref.icon,
      onClick = _ref.onClick,
      active = _ref.active;
  return /*#__PURE__*/jsx_default()(Iconic, {
    onClick: onClick,
    active: active
  }, void 0, /*#__PURE__*/jsx_default()(IconComponent, {
    size: 25
  }));
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/components/Title/index.jsx



var h1Classnames = (0,stitches_config/* css */.iv)({
  fontSize: 'medium',
  color: 'normalText',
  textAlign: 'center',
  marginBottom: 'sp20',
  textShadow: '0 6px 10px rgba(50,60,80,.5)'
});

var _ref = /*#__PURE__*/jsx_default()("h1", {
  className: h1Classnames
}, void 0, "pomodoro");

function Title() {
  return _ref;
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/components/Wrappers/index.jsx

var PomodoroWrapper = (0,stitches_config/* styled */.zo)("div", {
  flexDirection: 'column',
  alignItems: 'center',
  width: '93%',
  margin: 'auto',
  display: 'flex',
  lphone: {
    width: '400px'
  }
});
// EXTERNAL MODULE: ../../node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(951);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(38);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ../../node_modules/effector/effector.mjs
var effector = __webpack_require__(694);
// EXTERNAL MODULE: ../utils/dist/index.js
var dist = __webpack_require__(471);
;// CONCATENATED MODULE: ./src/containers/Pomodoro/models/timer/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function timer() {
  /* --------------------------------- stores --------------------------------- */
  var $completed = (0,effector/* createStore */.MT)(false);
  var $running = (0,effector/* createStore */.MT)(false);
  var $minutes = (0,effector/* createStore */.MT)({
    type: 'pomodoro',
    value: 1
  });
  var $seconds = (0,effector/* combine */.$e)($minutes, function (minutes) {
    return minutes.value * 60;
  });
  var $runningCounter = (0,effector/* combine */.$e)([$running, $seconds]);
  var $formatTime = (0,effector/* combine */.$e)($seconds, dist/* secondsToMinutes */.A);
  var $timerMinutes = (0,effector/* createStore */.MT)({
    normal: 1,
    "short": 5,
    "long": 25
  });
  var $progressPercentaje = (0,effector/* combine */.$e)($minutes, $seconds, function (minutes, seconds) {
    return 100 - seconds * 100 / (minutes.value * 60);
  });
  /* ------------------------------ event actions ----------------------------- */

  var decrement = (0,effector/* createEvent */.yM)();
  var setTotalSeconds = (0,effector/* createEvent */.yM)();
  var resetCounter = (0,effector/* createEvent */.yM)();
  var changeMinutes = (0,effector/* createEvent */.yM)();
  var changeTimerMinutes = (0,effector/* createEvent */.yM)();
  var runningApi = (0,effector/* createApi */.LC)($running, {
    onStart: function onStart() {
      return true;
    },
    onPause: function onPause() {
      return false;
    },
    onToggleRunning: function onToggleRunning(value) {
      return !value;
    }
  });
  var completedApi = (0,effector/* createApi */.LC)($completed, {
    onReset: function onReset() {
      return false;
    },
    onSuccess: function onSuccess() {
      return true;
    }
  });
  $minutes.on(changeMinutes, function (_, payload) {
    return payload;
  });
  $timerMinutes.on(changeTimerMinutes, function (timerMinutes, _ref) {
    var target = _ref.target;
    var type = target.name,
        value = target.value;
    changeMinutes({
      type: type,
      value: Number(value)
    });
    return _objectSpread(_objectSpread({}, timerMinutes), {}, defineProperty_default()({}, type, Number(value)));
  });
  $seconds.on(setTotalSeconds, function (_, payload) {
    changeMinutes(payload);
    return payload.value * 60;
  }).on(decrement, function (value) {
    return value - 1;
  }).on(resetCounter, function () {
    setTotalSeconds($minutes.getState());
    completedApi.onReset();
  });
  $completed.watch(function (completed) {
    var audio = new Audio();
    audio.src = __webpack_require__(922)/* .default */ .Z;

    if (completed) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  $runningCounter.watch(function (_ref2) {
    var _ref3 = slicedToArray_default()(_ref2, 2),
        running = _ref3[0],
        seconds = _ref3[1];

    if (seconds > 0 && running) setTimeout(function () {
      return decrement();
    }, 1000);

    if (seconds === 0 && running) {
      runningApi.onPause();
      completedApi.onSuccess();
    }
  });
  return _objectSpread(_objectSpread({
    $running: $running,
    $seconds: $seconds,
    $formatTime: $formatTime,
    $timerMinutes: $timerMinutes,
    $progressPercentaje: $progressPercentaje,
    $completed: $completed,
    setTotalSeconds: setTotalSeconds,
    changeTimerMinutes: changeTimerMinutes,
    resetCounter: resetCounter
  }, runningApi), completedApi);
}

/* harmony default export */ const models_timer = (timer());
;// CONCATENATED MODULE: ./src/containers/Pomodoro/models/ui/index.js


function ui_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ui_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ui_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ui_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function ui() {
  var $currentheme = (0,effector/* createStore */.MT)('primary');
  var $themeColors = (0,effector/* createStore */.MT)(Object.keys(stitches_config/* baseColors */.dw));
  var $baseColors = (0,effector/* createStore */.MT)(stitches_config/* baseColors */.dw);
  var $modal = (0,effector/* createStore */.MT)(false); // event actions

  var changeTheme = (0,effector/* createEvent */.yM)();
  var modalApi = (0,effector/* createApi */.LC)($modal, {
    openModal: function openModal() {
      return true;
    },
    closeModal: function closeModal() {
      return false;
    }
  });
  $currentheme.on(changeTheme, function (_, newTheme) {
    return newTheme;
  });
  return ui_objectSpread({
    $currentheme: $currentheme,
    $themeColors: $themeColors,
    $modal: $modal,
    $baseColors: $baseColors,
    changeTheme: changeTheme
  }, modalApi);
}

/* harmony default export */ const models_ui = (ui());
;// CONCATENATED MODULE: ./src/containers/Pomodoro/models/index.js


// EXTERNAL MODULE: ../../node_modules/effector-react/effector-react.mjs
var effector_react = __webpack_require__(639);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(479);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
;// CONCATENATED MODULE: ./src/components/BaseButton/index.jsx



var Button = (0,stitches_config/* styled */.zo)('button', {
  width: '100%',
  padding: 'sp10 sp5',
  borderRadius: 'medium',
  display: 'block',
  fontWeight: 'bold',
  variants: {
    variant: {
      primary: {
        backgroundColor: 'primary'
      },
      secondary: {
        backgroundColor: 'secondary'
      },
      third: {
        backgroundColor: 'third'
      }
    },
    textVariant: {
      light: {
        color: 'normalText'
      }
    }
  }
});
Button.defaultProps = {
  variant: 'primary'
};
function BaseButton(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties_default()(_ref, ["children"]);

  return /*#__PURE__*/react.createElement(Button, restProps, children);
}
;// CONCATENATED MODULE: ./src/components/RoundAvatar/index.jsx

var RoundAvatar = (0,stitches_config/* styled */.zo)('div', {
  borderRadius: 'full',
  size: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    bg: {
      "default": {
        backgroundColor: 'blackAlpha5'
      },
      primary: {
        backgroundColor: 'primary'
      },
      secondary: {
        backgroundColor: 'secondary'
      },
      third: {
        backgroundColor: 'third'
      }
    }
  }
});
RoundAvatar.defaultProps = {
  bg: 'default'
};
/* harmony default export */ const components_RoundAvatar = (RoundAvatar);
;// CONCATENATED MODULE: ./src/containers/Pomodoro/components/ModalSettings/index.styles.jsx




var Modal = (0,stitches_config/* styled */.zo)('div', {
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
        left: 0
      },
      body: {
        backgroundColor: 'card',
        borderRadius: 'small',
        width: '450px',
        position: 'relative'
      }
    }
  }
});
var Wrapper = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  variants: {
    variant: {
      header: {
        padding: 'sp20'
      },
      grid: {
        display: 'grid',
        gap: 'sp10',
        gridTemplateColumns: 'repeat(3,1fr)'
      },
      inline: defineProperty_default()({
        width: 'auto'
      }, components_RoundAvatar, {
        marginRight: 'sp10',
        fontWeight: 'bold'
      })
    },
    spacing: {
      10: {
        marginTop: 'sp10',
        marginBottom: 'sp10'
      }
    }
  }
});
var BaseButtonFloating = (0,stitches_config/* styled */.zo)(BaseButton, {
  color: 'normalText',
  display: 'block',
  width: 'auto',
  margin: 'auto auto -20px',
  padding: 'sp10 30px'
});
var Divider = (0,stitches_config/* styled */.zo)('div', {
  borderBottom: '1px solid rgba(0,0,0,.1)',
  display: 'flex',
  variants: {
    variant: {
      row: {
        margin: '20px',
        padding: '10px 0',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      col: {
        margin: '20px',
        padding: '10px 0',
        flexDirection: 'column'
      }
    }
  },
  '&:last-of-type': {
    borderBottom: 'none'
  }
});
var Text = (0,stitches_config/* styled */.zo)('span', {
  fontWeight: 'bold',
  variants: {
    font: {
      title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 'medium'
      },
      subtitle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 'small'
      },
      clamp: {
        fontWeight: 'bold',
        fontSize: 'small',
        color: 'neutral'
      }
    }
  }
});
// EXTERNAL MODULE: ../../node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(186);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(154);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
;// CONCATENATED MODULE: ./src/components/EditInput/index.jsx





var EditInput_Text = (0,stitches_config/* styled */.zo)('span', {
  color: 'neutral',
  fontWeight: 'bold',
  fontSize: 'small'
});
var Input = (0,stitches_config/* styled */.zo)('input', {
  borderRadius: 'small',
  padding: 'sp10',
  width: '100%',
  fontWeight: 'bold',
  backgroundColor: 'blackAlpha5',
  marginTop: 'sp10',
  fontFamily: 'arial'
});
var EditInput_Wrapper = (0,stitches_config/* styled */.zo)('div', {
  width: '100%'
});
var EditInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var subtitle = _ref.subtitle,
      restProps = objectWithoutProperties_default()(_ref, ["subtitle"]);

  return /*#__PURE__*/jsx_default()(EditInput_Wrapper, {}, void 0, /*#__PURE__*/jsx_default()(EditInput_Text, {}, void 0, subtitle), /*#__PURE__*/react.createElement(Input, extends_default()({
    ref: ref
  }, restProps)));
});
/* harmony default export */ const components_EditInput = (EditInput);
;// CONCATENATED MODULE: ./src/containers/Pomodoro/components/ModalSettings/index.jsx







var _ref2 = /*#__PURE__*/jsx_default()(Text, {
  font: "title"
}, void 0, "Settings");

var _ref3 = /*#__PURE__*/jsx_default()(md_index_esm/* MdClose */.FU5, {});

var _ref4 = /*#__PURE__*/jsx_default()(Text, {
  font: "subtitle"
}, void 0, "TIME (MINUTES)");

var _ref5 = /*#__PURE__*/jsx_default()(Text, {
  font: "subtitle"
}, void 0, "COLOR");

function ModalSettings(_ref) {
  var onClose = _ref.onClose,
      onApplyNewTheme = _ref.onApplyNewTheme,
      onSelectTheme = _ref.onSelectTheme,
      currentTheme = _ref.currentTheme,
      themeColors = _ref.themeColors,
      descriptionMinutes = _ref.descriptionMinutes,
      changeTimerMinutes = _ref.changeTimerMinutes,
      themeSelected = _ref.themeSelected;
  return /*#__PURE__*/jsx_default()(Modal, {
    type: "backdrop"
  }, void 0, /*#__PURE__*/jsx_default()(Modal, {
    type: "body"
  }, void 0, /*#__PURE__*/jsx_default()(Divider, {}, void 0, /*#__PURE__*/jsx_default()(Wrapper, {
    variant: "header"
  }, void 0, _ref2, /*#__PURE__*/jsx_default()("div", {
    className: "icon",
    onClick: onClose,
    role: "button",
    "aria-label": "close"
  }, void 0, _ref3))), /*#__PURE__*/jsx_default()(Divider, {
    variant: "col"
  }, void 0, _ref4, /*#__PURE__*/jsx_default()(Wrapper, {
    spacing: 10,
    variant: "grid"
  }, void 0, descriptionMinutes.map(function (item, key) {
    return /*#__PURE__*/jsx_default()(components_EditInput, {
      subtitle: item.children,
      name: item.type,
      defaultValue: item.value,
      onKeyUp: changeTimerMinutes,
      type: "number"
    }, key);
  }))), /*#__PURE__*/jsx_default()(Divider, {
    variant: "row"
  }, void 0, _ref5, /*#__PURE__*/jsx_default()(Wrapper, {
    variant: "inline"
  }, void 0, themeColors.map(function (theme, index) {
    return /*#__PURE__*/jsx_default()(components_RoundAvatar, {
      bg: theme,
      onClick: function onClick() {
        return onSelectTheme(theme);
      }
    }, index, themeSelected === theme && "\u2713");
  }))), /*#__PURE__*/jsx_default()(BaseButtonFloating, {
    variant: currentTheme,
    onClick: onApplyNewTheme
  }, void 0, "Apply")));
}

/* harmony default export */ const components_ModalSettings = (/*#__PURE__*/(0,react.memo)(ModalSettings));
;// CONCATENATED MODULE: ./src/containers/Pomodoro/hooks/useMinutesParser.js


function useMinutesParser() {
  var timerMinutes = (0,effector_react/* useStore */.oR)(models_timer.$timerMinutes);
  return Object.keys(timerMinutes).map(function (timer) {
    return {
      type: timer,
      value: timerMinutes[timer]
    };
  });
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/hooks/useDescriptionMinutesParser.js


function useDescriptionMinutesParser_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useDescriptionMinutesParser_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useDescriptionMinutesParser_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useDescriptionMinutesParser_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var optionsName = ['pomodoro', 'short break', 'long break'];
function useDescriptionMinutesParser() {
  var timerMinutes = useMinutesParser();
  var dataDescriptionMinutes = timerMinutes.map(function (value, index) {
    return useDescriptionMinutesParser_objectSpread({
      children: optionsName[index]
    }, value);
  });
  return dataDescriptionMinutes;
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/ui/ModalSettingsUI.jsx







function ModalSettingsUI() {
  var modalOpen = (0,effector_react/* useStore */.oR)(models_ui.$modal);
  var themeColors = (0,effector_react/* useStore */.oR)(models_ui.$themeColors);
  var currentTheme = (0,effector_react/* useStore */.oR)(models_ui.$currentheme);
  var descriptionMinutes = useDescriptionMinutesParser();

  var _useState = (0,react.useState)(function () {
    return currentTheme;
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      themeSelected = _useState2[0],
      setThemeSelected = _useState2[1];

  var onApplyNewTheme = function onApplyNewTheme() {
    models_ui.changeTheme(themeSelected);
    models_ui.closeModal();
  };

  var onSelectTheme = (0,react.useCallback)(setThemeSelected, [setThemeSelected]);
  return modalOpen ? /*#__PURE__*/jsx_default()(components_ModalSettings, {
    onClose: models_ui.closeModal,
    currentTheme: currentTheme,
    themeColors: themeColors,
    descriptionMinutes: descriptionMinutes,
    themeSelected: themeSelected,
    onApplyNewTheme: onApplyNewTheme,
    changeTimerMinutes: models_timer.changeTimerMinutes,
    onSelectTheme: onSelectTheme
  }) : null;
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/components/TabOptions/index.jsx





var Option = (0,stitches_config/* styled */.zo)(BaseButton, {
  ':disabled': {
    backgroundColor: 'transparent',
    color: 'neutral'
  },
  variants: {
    deactive: {
      "true": {
        background: 'transparent',
        color: 'neutral'
      }
    }
  }
});
var TabOptions_Wrapper = (0,stitches_config/* styled */.zo)(BaseButton, {
  backgroundColor: 'primaryDark20',
  display: 'flex',
  alignItems: 'center',
  marginTop: 3,
  marginBottom: 3
});
function TabOptions(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      options = _ref.options,
      disabled = _ref.disabled,
      dispatchOptionSelected = _ref.dispatchOptionSelected;

  var _useState = (0,react.useState)({
    key: 0,
    data: {
      type: 'pomodoro',
      value: 1
    }
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      option = _useState2[0],
      setOption = _useState2[1];

  var onOptionSelected = (0,react.useCallback)(function (value) {
    setOption(value);
  }, [setOption]);
  (0,react.useEffect)(function () {
    dispatchOptionSelected(option.data);
  }, [option]);
  return /*#__PURE__*/jsx_default()(TabOptions_Wrapper, {
    as: "div"
  }, void 0, options.map(function (_ref2, key) {
    var type = _ref2.type,
        value = _ref2.value,
        children = _ref2.children;
    return /*#__PURE__*/jsx_default()(Option, {
      onClick: function onClick() {
        return onOptionSelected({
          key: key,
          data: {
            type: type,
            value: value
          }
        });
      },
      variant: option.key === key && variant,
      deactive: option.key !== key,
      disabled: disabled
    }, key, children);
  }));
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/ui/TabOptionsUI.jsx







var TabOptionsUI = function TabOptionsUI() {
  var running = (0,effector_react/* useStore */.oR)(models_timer.$running);
  var data = useDescriptionMinutesParser();
  var currentTheme = (0,effector_react/* useStore */.oR)(models_ui.$currentheme);
  return /*#__PURE__*/jsx_default()(TabOptions, {
    options: data,
    variant: currentTheme,
    disabled: running,
    dispatchOptionSelected: function dispatchOptionSelected(payload) {
      models_timer.setTotalSeconds(payload);
    }
  });
};

/* harmony default export */ const ui_TabOptionsUI = (TabOptionsUI);
// EXTERNAL MODULE: ../../node_modules/react-circular-progressbar/dist/index.esm.js
var dist_index_esm = __webpack_require__(886);
;// CONCATENATED MODULE: ./src/containers/Pomodoro/components/CircleProgressBar/index.jsx




var CircleWrapper = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
  borderRadius: 'full',
  boxShadow: "10px 10px 20px rgba(20,20,20,.1), \n    -10px -10px 30px #272a55,\n    5px 4px 10px rgba(0,0,0,.1), \n    50px 30px 60px rgba(0,0,0,.3)\n    "
});
var CircleProgressBar_Text = (0,stitches_config/* styled */.zo)("span", {
  variants: {
    variant: {
      title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'normalText'
      },
      subtitle: {
        textTransform: 'uppercase',
        marginTop: 'sp20',
        letterSpacing: '10px',
        color: 'normalText',
        lphone: {
          cursor: 'pointer'
        }
      }
    }
  }
});
function CircleProgressBar(_ref) {
  var size = _ref.size,
      text = _ref.text,
      subtitle = _ref.subtitle,
      color = _ref.color,
      value = _ref.value,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue;
  var progressSize = size - 20;
  var circularStyles = {
    root: {
      width: progressSize + 'px',
      height: progressSize + 'px'
    },
    path: {
      stroke: color,
      transition: '.3s'
    },
    trail: {
      stroke: 'transparent'
    }
  };
  return /*#__PURE__*/jsx_default()(CircleWrapper, {
    style: {
      width: size + 'px',
      height: size + 'px'
    }
  }, void 0, /*#__PURE__*/jsx_default()(dist_index_esm/* CircularProgressbarWithChildren */.Wo, {
    value: value,
    maxValue: maxValue,
    minValue: minValue,
    strokeWidth: 3,
    styles: circularStyles
  }, void 0, /*#__PURE__*/jsx_default()("div", {
    className: (0,stitches_config/* css */.iv)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    })
  }, void 0, /*#__PURE__*/jsx_default()(CircleProgressBar_Text, {
    variant: "title"
  }, void 0, text), /*#__PURE__*/jsx_default()(CircleProgressBar_Text, {
    variant: "subtitle"
  }, void 0, subtitle))));
}
CircleProgressBar.defaultProps = {
  size: 250
};
;// CONCATENATED MODULE: ./src/containers/Pomodoro/ui/CircleProgressTimerUI.jsx






var TitleFormatTime = function TitleFormatTime() {
  var formatTime = (0,effector_react/* useStore */.oR)(models_timer.$formatTime);
  return formatTime;
};

var SubtitleManager = function SubtitleManager() {
  var running = (0,effector_react/* useStore */.oR)(models_timer.$running);
  var completed = (0,effector_react/* useStore */.oR)(models_timer.$completed);

  var onTimerManager = function onTimerManager() {
    if (completed) models_timer.resetCounter();else models_timer.onToggleRunning();
  };

  return /*#__PURE__*/jsx_default()("div", {
    onClick: onTimerManager
  }, void 0, completed ? "RESET" : running ? "PAUSE" : "START");
};

var CircleProgressTimerUI_ref = /*#__PURE__*/jsx_default()(TitleFormatTime, {});

var CircleProgressTimerUI_ref2 = /*#__PURE__*/jsx_default()(SubtitleManager, {});

function CircleProgressTimerUI() {
  var currentTheme = (0,effector_react/* useStore */.oR)(models_ui.$currentheme);
  var baseColors = (0,effector_react/* useStore */.oR)(models_ui.$baseColors);
  var progressPercentaje = (0,effector_react/* useStore */.oR)(models_timer.$progressPercentaje);
  return /*#__PURE__*/jsx_default()(CircleProgressBar, {
    value: progressPercentaje,
    color: baseColors[currentTheme],
    text: CircleProgressTimerUI_ref,
    subtitle: CircleProgressTimerUI_ref2
  });
}
;// CONCATENATED MODULE: ./src/containers/Pomodoro/index.jsx











var Pomodoro_ref = /*#__PURE__*/jsx_default()(Title, {});

var Pomodoro_ref2 = /*#__PURE__*/jsx_default()(ui_TabOptionsUI, {});

var Pomodoro_ref3 = /*#__PURE__*/jsx_default()(CircleProgressTimerUI, {});

var Pomodoro_ref4 = /*#__PURE__*/jsx_default()(ModalSettingsUI, {});

function Pomodoro() {
  return /*#__PURE__*/jsx_default()(PomodoroWrapper, {}, void 0, Pomodoro_ref, Pomodoro_ref2, Pomodoro_ref3, /*#__PURE__*/jsx_default()(BaseIcon, {
    icon: index_esm/* AiTwotoneSetting */.QAE,
    onClick: models_ui.openModal
  }), Pomodoro_ref4);
}
// EXTERNAL MODULE: ./src/registerServiceWorker.js
var registerServiceWorker = __webpack_require__(259);
;// CONCATENATED MODULE: ./src/App.jsx






var App_ref = /*#__PURE__*/jsx_default()(Pomodoro, {});

var App = function App() {
  return App_ref;
};

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/jsx_default()(src_App, {}), document.getElementById('__app__'));

/***/ }),

/***/ 259:
/***/ (() => {

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

/***/ }),

/***/ 941:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: !0
}), exports.zo = exports.iv = exports.dw = void 0;

var _react = __webpack_require__(654),
    _utils = __webpack_require__(488);

function ownKeys(a, b) {
  var c = Object.keys(a);

  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function (b) {
      return Object.getOwnPropertyDescriptor(a, b).enumerable;
    })), c.push.apply(c, d);
  }

  return c;
}

function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++) b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys(Object(b), !0).forEach(function (c) {
    _defineProperty(a, c, b[c]);
  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys(Object(b)).forEach(function (c) {
    Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
  });

  return a;
}

function _defineProperty(a, b, c) {
  return b in a ? Object.defineProperty(a, b, {
    value: c,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[b] = c, a;
}

var baseColors = {
  primary: "#FF7E7A",
  secondary: "#1CA0F2",
  third: "#ba68c8"
};
exports.dw = baseColors;

var _createStyled = (0, _react.createStyled)({
  tokens: {
    colors: _objectSpread({
      blackAlpha5: "rgba(0, 0, 0, 0.05)",
      blackAlpha60: "rgba(0, 0, 0, 0.60)",
      blackAlpha80: "rgba(0, 0, 0, 0.80)",
      primary10: "#2967B3",
      primary20: "#3B5897",
      primaryDark: "#1b2242",
      primaryDark20: "#141930",
      card: "#ffffff",
      normalText: "#FFFFFF",
      darkText: "#rgb(20,20,20)",
      neutral: "#4a4e67"
    }, baseColors),
    fontSizes: {
      small: ".9rem",
      regular: "1rem",
      medium: "1.2rem",
      big: "2rem"
    },
    radii: {
      small: "10px",
      medium: "60px",
      full: "100%"
    },
    space: {
      sp5: "5px",
      sp10: "10px",
      sp20: "20px"
    }
  },
  utils: {
    size: function size() {
      return function (a) {
        return {
          width: a,
          height: a
        };
      };
    }
  },
  breakpoints: {
    xphone: (0, _utils.breakpoint)("320px"),
    lphone: (0, _utils.breakpoint)("480px"),
    stablet: (0, _utils.breakpoint)("600px"),
    mtablet: (0, _utils.breakpoint)("768px"),
    ltablet: (0, _utils.breakpoint)("800px"),
    sdesktop: (0, _utils.breakpoint)("10240px"),
    mdesktop: (0, _utils.breakpoint)("1280px"),
    ldesktop: (0, _utils.breakpoint)("1440px")
  }
}),
    css = _createStyled.css,
    styled = _createStyled.styled;

exports.zo = styled, exports.iv = css;

/***/ }),

/***/ 488:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: !0
})), exports.breakpoint = exports.mediaQuery = void 0;

var mediaQuery = function (a) {
  var b = a.media,
      c = a.rule;
  return "@media (min-width:".concat(b, ") { ").concat(c, "}");
};

exports.mediaQuery = mediaQuery;

var breakpoint = function (a) {
  return function (b) {
    return mediaQuery({
      media: a,
      rule: b
    });
  };
};

exports.breakpoint = breakpoint;

/***/ }),

/***/ 471:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: !0
}), exports.A = void 0;

var _fecha = __webpack_require__(51),
    secondsToMinutes = function (a) {
  return (0, _fecha.format)(new Date(1e3 * a), "mm:ss");
};

exports.A = secondsToMinutes;

/***/ })

},
0,[[703,666,102]]]);