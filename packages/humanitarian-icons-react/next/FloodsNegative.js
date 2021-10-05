/**
 *
 * Code generated by @wfp/icon-build-helpers. DO NOT EDIT.
 * @wfp/icon-build-helpers is a fork of @carbon/icon-build-helpers
 */
'use strict';

var iconPropTypes = require('./iconPropTypes-dc77abf6.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _mask, _g, _mask2, _g2;

var _excluded = ["children", "size"];
var FloodsNegative = /*#__PURE__*/React__default['default'].forwardRef(function FloodsNegative(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  if (size === "glyph" || size === "glyph" || size === "glyphpx") {
    return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 56 56"
    }, rest), _mask || (_mask = /*#__PURE__*/React__default['default'].createElement("mask", {
      id: "a",
      style: "mask-type:alpha",
      width: "56",
      height: "56",
      x: "0",
      y: "0",
      maskUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React__default['default'].createElement("path", {
      "fill-rule": "evenodd",
      d: "M0 0H56V56H0V0Z",
      "clip-rule": "evenodd"
    }))), _g || (_g = /*#__PURE__*/React__default['default'].createElement("g", {
      mask: "url(#a)"
    }, /*#__PURE__*/React__default['default'].createElement("path", {
      d: "M47.5283 32.2031C47.0636 32.1023 46.523 32.0345 45.8659 32.0345C43.9194 32.0345 42.8637 32.615 42.0232 33.0769C41.3247 33.4639 40.8669 33.7163 39.761 33.7163C38.6629 33.7163 38.2061 33.4639 37.5066 33.0769C36.6671 32.615 35.6104 32.0345 33.6649 32.0345C31.7105 32.0345 30.6628 32.615 29.8133 33.0769C29.1237 33.4639 28.6659 33.7163 27.5689 33.7163C26.4629 33.7163 26.0051 33.4639 25.3145 33.0769C24.6407 32.7158 23.8426 32.2699 22.5778 32.1103V17.2173C22.5778 17.0996 22.637 16.9818 22.7287 16.8981L34.9208 6.85698C34.9948 6.79015 35.1112 6.79015 35.1872 6.85698L47.3793 16.8981C47.4711 16.9818 47.5283 17.0996 47.5283 17.2173V32.2031ZM45.8659 38.7618C44.7649 38.7618 44.3051 39.0152 43.6116 39.3972C42.7651 39.8631 41.7134 40.4436 39.7629 40.4436C37.8145 40.4436 36.7618 39.8631 35.9173 39.3972C35.2227 39.0152 34.764 38.7618 33.662 38.7618C32.5619 38.7618 32.1042 39.0152 31.4106 39.3962C30.5641 39.8631 29.5134 40.4436 27.5639 40.4436C25.6145 40.4436 24.5638 39.8631 23.7183 39.3972C23.0247 39.0152 22.5659 38.7618 21.4649 38.7618C20.3639 38.7618 19.9061 39.0152 19.2126 39.3972C18.3671 39.8631 17.3154 40.4436 15.3669 40.4436C13.4194 40.4436 12.3677 39.8631 11.5222 39.3972C10.8287 39.0152 10.3709 38.7618 9.27184 38.7618C8.35235 38.7618 7.60748 38.0087 7.60748 37.08C7.60748 36.1513 8.35235 35.3981 9.27184 35.3981C11.2203 35.3981 12.272 35.9787 13.1165 36.4445C13.8101 36.8276 14.2688 37.08 15.3669 37.08C16.4679 37.08 16.9257 36.8266 17.6193 36.4445C18.4647 35.9787 19.5164 35.3981 21.4649 35.3981C23.4144 35.3981 24.4651 35.9787 25.3116 36.4445C26.0051 36.8266 26.4639 37.08 27.5639 37.08C28.665 37.08 29.1227 36.8266 29.8163 36.4445C30.6618 35.9787 31.7135 35.3981 33.662 35.3981C35.6114 35.3981 36.6641 35.9787 37.5086 36.4445C38.2032 36.8266 38.6619 37.08 39.7629 37.08C40.8649 37.08 41.3247 36.8266 42.0182 36.4445C42.8647 35.9787 43.9164 35.3981 45.8659 35.3981C46.7844 35.3981 47.5283 36.1513 47.5283 37.08C47.5283 38.0087 46.7844 38.7618 45.8659 38.7618ZM45.8659 45.4891C44.7678 45.4891 44.3022 45.7415 43.6126 46.1285C42.7631 46.5914 41.7154 47.1709 39.761 47.1709C37.8154 47.1709 36.7578 46.5914 35.9192 46.1285C35.2198 45.7415 34.763 45.4891 33.6649 45.4891C32.558 45.4891 32.1012 45.7415 31.4106 46.1285C30.5621 46.5914 29.5154 47.1709 27.5689 47.1709C25.6145 47.1709 24.5657 46.5914 23.7183 46.1285C23.0267 45.7415 22.562 45.4891 21.4639 45.4891C20.3659 45.4891 19.9081 45.7415 19.2096 46.1285C18.37 46.5914 17.3134 47.1709 15.3679 47.1709C13.4214 47.1709 12.3657 46.5914 11.5252 46.1285C10.8267 45.7415 10.3689 45.4891 9.27184 45.4891C8.35629 45.4891 7.60748 44.732 7.60748 43.8073C7.60748 42.8826 8.35629 42.1254 9.27184 42.1254C11.2184 42.1254 12.274 42.705 13.1145 43.1679C13.8121 43.5549 14.2698 43.8073 15.3679 43.8073C16.4659 43.8073 16.9227 43.5549 17.6222 43.1679C18.4608 42.705 19.5184 42.1254 21.4639 42.1254C23.4104 42.1254 24.4661 42.705 25.3145 43.1679C26.0051 43.5549 26.4629 43.8073 27.5689 43.8073C28.6659 43.8073 29.1237 43.5549 29.8133 43.1679C30.6628 42.705 31.7105 42.1254 33.6649 42.1254C35.6104 42.1254 36.6671 42.705 37.5066 43.1679C38.2061 43.5549 38.6629 43.8073 39.761 43.8073C40.8669 43.8073 41.3247 43.5549 42.0232 43.1679C42.8637 42.705 43.9194 42.1254 45.8659 42.1254C46.7804 42.1254 47.5283 42.8826 47.5283 43.8073C47.5283 44.732 46.7804 45.4891 45.8659 45.4891ZM53.6667 0H2.33325C1.04972 0 0 1.06137 0 2.35914V53.6409C0 54.9386 1.04972 56 2.33325 56H53.6667C54.9503 56 56 54.9386 56 53.6409V2.35914C56 1.06137 54.9503 0 53.6667 0Z",
      "clip-rule": "evenodd"
    }))), children);
  }

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 56 56"
  }, rest), _mask2 || (_mask2 = /*#__PURE__*/React__default['default'].createElement("mask", {
    id: "a",
    style: "mask-type:alpha",
    width: "56",
    height: "56",
    x: "0",
    y: "0",
    maskUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    "fill-rule": "evenodd",
    d: "M0 0H56V56H0V0Z",
    "clip-rule": "evenodd"
  }))), _g2 || (_g2 = /*#__PURE__*/React__default['default'].createElement("g", {
    mask: "url(#a)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M47.5283 32.2031C47.0636 32.1023 46.523 32.0345 45.8659 32.0345C43.9194 32.0345 42.8637 32.615 42.0232 33.0769C41.3247 33.4639 40.8669 33.7163 39.761 33.7163C38.6629 33.7163 38.2061 33.4639 37.5066 33.0769C36.6671 32.615 35.6104 32.0345 33.6649 32.0345C31.7105 32.0345 30.6628 32.615 29.8133 33.0769C29.1237 33.4639 28.6659 33.7163 27.5689 33.7163C26.4629 33.7163 26.0051 33.4639 25.3145 33.0769C24.6407 32.7158 23.8426 32.2699 22.5778 32.1103V17.2173C22.5778 17.0996 22.637 16.9818 22.7287 16.8981L34.9208 6.85698C34.9948 6.79015 35.1112 6.79015 35.1872 6.85698L47.3793 16.8981C47.4711 16.9818 47.5283 17.0996 47.5283 17.2173V32.2031ZM45.8659 38.7618C44.7649 38.7618 44.3051 39.0152 43.6116 39.3972C42.7651 39.8631 41.7134 40.4436 39.7629 40.4436C37.8145 40.4436 36.7618 39.8631 35.9173 39.3972C35.2227 39.0152 34.764 38.7618 33.662 38.7618C32.5619 38.7618 32.1042 39.0152 31.4106 39.3962C30.5641 39.8631 29.5134 40.4436 27.5639 40.4436C25.6145 40.4436 24.5638 39.8631 23.7183 39.3972C23.0247 39.0152 22.5659 38.7618 21.4649 38.7618C20.3639 38.7618 19.9061 39.0152 19.2126 39.3972C18.3671 39.8631 17.3154 40.4436 15.3669 40.4436C13.4194 40.4436 12.3677 39.8631 11.5222 39.3972C10.8287 39.0152 10.3709 38.7618 9.27184 38.7618C8.35235 38.7618 7.60748 38.0087 7.60748 37.08C7.60748 36.1513 8.35235 35.3981 9.27184 35.3981C11.2203 35.3981 12.272 35.9787 13.1165 36.4445C13.8101 36.8276 14.2688 37.08 15.3669 37.08C16.4679 37.08 16.9257 36.8266 17.6193 36.4445C18.4647 35.9787 19.5164 35.3981 21.4649 35.3981C23.4144 35.3981 24.4651 35.9787 25.3116 36.4445C26.0051 36.8266 26.4639 37.08 27.5639 37.08C28.665 37.08 29.1227 36.8266 29.8163 36.4445C30.6618 35.9787 31.7135 35.3981 33.662 35.3981C35.6114 35.3981 36.6641 35.9787 37.5086 36.4445C38.2032 36.8266 38.6619 37.08 39.7629 37.08C40.8649 37.08 41.3247 36.8266 42.0182 36.4445C42.8647 35.9787 43.9164 35.3981 45.8659 35.3981C46.7844 35.3981 47.5283 36.1513 47.5283 37.08C47.5283 38.0087 46.7844 38.7618 45.8659 38.7618ZM45.8659 45.4891C44.7678 45.4891 44.3022 45.7415 43.6126 46.1285C42.7631 46.5914 41.7154 47.1709 39.761 47.1709C37.8154 47.1709 36.7578 46.5914 35.9192 46.1285C35.2198 45.7415 34.763 45.4891 33.6649 45.4891C32.558 45.4891 32.1012 45.7415 31.4106 46.1285C30.5621 46.5914 29.5154 47.1709 27.5689 47.1709C25.6145 47.1709 24.5657 46.5914 23.7183 46.1285C23.0267 45.7415 22.562 45.4891 21.4639 45.4891C20.3659 45.4891 19.9081 45.7415 19.2096 46.1285C18.37 46.5914 17.3134 47.1709 15.3679 47.1709C13.4214 47.1709 12.3657 46.5914 11.5252 46.1285C10.8267 45.7415 10.3689 45.4891 9.27184 45.4891C8.35629 45.4891 7.60748 44.732 7.60748 43.8073C7.60748 42.8826 8.35629 42.1254 9.27184 42.1254C11.2184 42.1254 12.274 42.705 13.1145 43.1679C13.8121 43.5549 14.2698 43.8073 15.3679 43.8073C16.4659 43.8073 16.9227 43.5549 17.6222 43.1679C18.4608 42.705 19.5184 42.1254 21.4639 42.1254C23.4104 42.1254 24.4661 42.705 25.3145 43.1679C26.0051 43.5549 26.4629 43.8073 27.5689 43.8073C28.6659 43.8073 29.1237 43.5549 29.8133 43.1679C30.6628 42.705 31.7105 42.1254 33.6649 42.1254C35.6104 42.1254 36.6671 42.705 37.5066 43.1679C38.2061 43.5549 38.6629 43.8073 39.761 43.8073C40.8669 43.8073 41.3247 43.5549 42.0232 43.1679C42.8637 42.705 43.9194 42.1254 45.8659 42.1254C46.7804 42.1254 47.5283 42.8826 47.5283 43.8073C47.5283 44.732 46.7804 45.4891 45.8659 45.4891ZM53.6667 0H2.33325C1.04972 0 0 1.06137 0 2.35914V53.6409C0 54.9386 1.04972 56 2.33325 56H53.6667C54.9503 56 56 54.9386 56 53.6409V2.35914C56 1.06137 54.9503 0 53.6667 0Z",
    "clip-rule": "evenodd"
  }))), children);
});
FloodsNegative.propTypes = iconPropTypes.iconPropTypes;

module.exports = FloodsNegative;
