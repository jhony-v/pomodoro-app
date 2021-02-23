"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpoint = exports.mediaQuery = void 0;

var mediaQuery = function mediaQuery(_ref) {
  var media = _ref.media,
      rule = _ref.rule;
  return "@media (min-width:".concat(media, ") { ").concat(rule, "}");
};

exports.mediaQuery = mediaQuery;

var breakpoint = function breakpoint(media) {
  return function (rule) {
    return mediaQuery({
      media: media,
      rule: rule
    });
  };
};

exports.breakpoint = breakpoint;