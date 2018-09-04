'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _SnackbarContent = require('@material-ui/core/SnackbarContent');

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _SnackbarItem = require('./SnackbarItem.styles');

var _SnackbarItem2 = require('./SnackbarItem.util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackbarItem = function (_Component) {
    _inherits(SnackbarItem, _Component);

    function SnackbarItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SnackbarItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SnackbarItem.__proto__ || Object.getPrototypeOf(SnackbarItem)).call.apply(_ref, [this].concat(args))), _this), _this.getTransitionStyles = function (index) {
            var anchorOrigin = _this.props.anchorOrigin;

            return (0, _SnackbarItem.getTransitionStyles)(index, anchorOrigin);
        }, _this.handleClose = function (key) {
            return function (event, reason) {
                var onClose = _this.props.onClose;

                if (reason === 'clickaway') return;
                onClose(key);
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SnackbarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                level = _props.level,
                _props$snack = _props.snack,
                message = _props$snack.message,
                variant = _props$snack.variant,
                key = _props$snack.key,
                open = _props$snack.open,
                iconVariant = _props.iconVariant,
                anchorOrigin = _props.anchorOrigin,
                _onExited = _props.onExited,
                props = _objectWithoutProperties(_props, ['classes', 'level', 'snack', 'iconVariant', 'anchorOrigin', 'onExited']);

            return _react2.default.createElement(
                _Snackbar2.default,
                _extends({
                    autoHideDuration: 5000,
                    TransitionComponent: _SnackbarItem2.TransitionComponent,
                    TransitionProps: {
                        direction: (0, _SnackbarItem2.getTransitionDirection)(anchorOrigin)
                    },
                    anchorOrigin: anchorOrigin || _SnackbarItem2.defaultAnchorOrigin
                }, props, {
                    open: open,
                    style: this.getTransitionStyles(level),
                    onClose: this.handleClose(key),
                    onExited: function onExited() {
                        return _onExited(key);
                    }
                }),
                _react2.default.createElement(_SnackbarContent2.default, {
                    className: classes[variant],
                    'aria-describedby': 'client-snackbar',
                    message: _react2.default.createElement(
                        'span',
                        { id: 'client-snackbar', className: classes.message },
                        _react2.default.createElement(
                            'span',
                            { className: classes.iconVariant },
                            iconVariant[variant]
                        ),
                        message
                    )
                })
            );
        }
    }]);

    return SnackbarItem;
}(_react.Component);

SnackbarItem.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    level: _propTypes2.default.number.isRequired,
    snack: _propTypes2.default.shape({
        message: _propTypes2.default.string.isRequired,
        variant: _propTypes2.default.oneOf(['error', 'success', 'warning', 'info']).isRequired,
        key: _propTypes2.default.number.isRequired,
        open: _propTypes2.default.bool.isRequired
    }).isRequired,
    iconVariant: _propTypes2.default.shape({
        success: _propTypes2.default.any.isRequired,
        warning: _propTypes2.default.any.isRequired,
        error: _propTypes2.default.any.isRequired,
        info: _propTypes2.default.any.isRequired
    }),
    onClose: _propTypes2.default.func.isRequired,
    onExited: _propTypes2.default.func.isRequired
};

SnackbarItem.defaultProps = {
    iconVariant: _SnackbarItem2.variantIcon
};

exports.default = (0, _styles.withStyles)(_SnackbarItem.styles)(SnackbarItem);