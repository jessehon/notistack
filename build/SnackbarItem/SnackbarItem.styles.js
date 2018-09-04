'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransitionStyles = exports.styles = undefined;

var _green = require('@material-ui/core/colors/green');

var _green2 = _interopRequireDefault(_green);

var _amber = require('@material-ui/core/colors/amber');

var _amber2 = _interopRequireDefault(_amber);

var _SnackbarItem = require('./SnackbarItem.util');

var _constants = require('../utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    return {
        success: {
            backgroundColor: _green2.default[600]
        },
        error: {
            backgroundColor: theme.palette.error.dark
        },
        info: {
            backgroundColor: '#2979ff' // nice blue
        },
        warning: {
            backgroundColor: _amber2.default[700]
        },
        message: {
            display: 'flex',
            alignItems: 'center'
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing.unit
        }
    };
};

/**
 * @param {object} anchorOrigin - how snack is postioned. e.g.
 * { vertical: 'bottom', horizontal: 'left' }
 * @param {number} level - Level on which snakcbar should be displayed
 * (when snackbars are stacked on top of eachother)
 */
var getTransitionStyles = function getTransitionStyles(level) {
    var anchorOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SnackbarItem.defaultAnchorOrigin;
    return Object.assign(_defineProperty({}, anchorOrigin.vertical, level * 48 + level * 16 + 20), {
        WebKitTransition: 'all ' + _constants.TRANSITION_DOWN_DURATION + 'ms',
        MozTransition: 'all ' + _constants.TRANSITION_DOWN_DURATION + 'ms',
        msTransition: 'all ' + _constants.TRANSITION_DOWN_DURATION + 'ms',
        OTransition: 'all ' + _constants.TRANSITION_DOWN_DURATION + 'ms',
        transition: 'all ' + _constants.TRANSITION_DOWN_DURATION + 'ms',
        transitionDelay: _constants.TRANSITION_DELAY + 'ms'
    });
};

exports.styles = styles;
exports.getTransitionStyles = getTransitionStyles;