'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SnackbarContext = require('./SnackbarContext');

var _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withSnackbar = function withSnackbar(Component) {
    return function (props) {
        return _react2.default.createElement(
            _SnackbarContext2.default.Consumer,
            null,
            function (handlePresentSnackbar) {
                return _react2.default.createElement(Component, _extends({}, props, {
                    onPresentSnackbar: handlePresentSnackbar
                }));
            }
        );
    };
};

exports.default = withSnackbar;