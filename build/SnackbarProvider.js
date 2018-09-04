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

var _SnackbarContext = require('./SnackbarContext');

var _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

var _SnackbarItem = require('./SnackbarItem');

var _SnackbarItem2 = _interopRequireDefault(_SnackbarItem);

var _constants = require('./utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackbarProvider = function (_Component) {
    _inherits(SnackbarProvider, _Component);

    function SnackbarProvider(props) {
        _classCallCheck(this, SnackbarProvider);

        var _this = _possibleConstructorReturn(this, (SnackbarProvider.__proto__ || Object.getPrototypeOf(SnackbarProvider)).call(this, props));

        _this.nextSnackKey = 0;
        _this.queue = [];

        _this.getNextSnackKey = function () {
            return _this.nextSnackKey++;
        };

        _this.buildOpenSnack = function (variant, message) {
            return {
                variant: variant,
                message: message,
                open: true,
                key: _this.getNextSnackKey()
            };
        };

        _this.handlePresentSnackbar = function (variant, message) {
            _this.queue.push(_this.buildOpenSnack(variant, message));
            _this.handleDisplaySnack();
        };

        _this.handleDisplaySnack = function () {
            var maxSnack = _this.props.maxSnack;
            var snacks = _this.state.snacks;

            if (snacks.length >= maxSnack) {
                return _this.handleDismissOldest();
            }
            return _this.processQueue();
        };

        _this.processQueue = function () {
            if (_this.queue.length > 0) {
                var snacks = _this.state.snacks;

                var newOne = _this.queue.shift();
                _this.setState({
                    snacks: [].concat(_toConsumableArray(snacks), [newOne])
                });
            }
        };

        _this.handleDismissOldest = function () {
            var snacks = _this.state.snacks;

            var snacksCopy = JSON.parse(JSON.stringify(snacks));
            snacksCopy = snacksCopy.filter(function (item) {
                return item.open === true;
            });
            snacksCopy[0].open = false;
            _this.setState({ snacks: snacksCopy });
        };

        _this.handleCloseSnack = function (key) {
            var snacks = _this.state.snacks;

            var snacksCopy = JSON.parse(JSON.stringify(snacks));
            snacksCopy.find(function (item) {
                return item.key === key;
            }).open = false;
            _this.setState({ snacks: snacksCopy });
        };

        _this.handleExitedSnack = function (key) {
            var snacks = _this.state.snacks;

            var enterDelay = _constants.TRANSITION_DELAY + _constants.TRANSITION_DOWN_DURATION + 40;
            var snacksCopy = JSON.parse(JSON.stringify(snacks));
            snacksCopy = snacksCopy.filter(function (item) {
                return item.key !== key;
            });
            _this.setState({ snacks: snacksCopy }, function () {
                setTimeout(_this.handleDisplaySnack, enterDelay);
            });
        };

        _this.state = {
            snacks: props.initialSnacks.map(function (snack) {
                return _this.buildOpenSnack(snack.variant, snack.message);
            })
        };
        return _this;
    }

    /**
     * Builds an open snackbar object.
     */


    /**
     * Adds a new snackbar to the queue to be presented.
     * @param {string} variant - type of the snackbar. can be:
     * (success, error, warning, info)
     * @param {string} message - text of the notification
     */


    /**
     * Display snack if there's space for it.
     * Otherwise, immediately begin dismissing the
     * oldest message to start showing the new one.
     */


    /**
     * Display items (notifications) in the queue
     * if there's space for them
     */


    /**
     * Hide oldest snackbar on the screen because
     * there exists a new one which we have to display.
     */


    /**
     * Hide a snackbar after its timeout.
     * @param {number} key - id of the snackbar we want to hide
     */


    /**
     * When we set open attribute of a snackbar
     * to false (i.e. after we hide a snackbar),
     * it leaves the screen and immediately after
     * leaving animation is done, this method gets
     * called. We remove the hidden snackbar from
     * state and then display notifications waiting
     * in the queue (if any).
     * @param {number} key - id of the snackbar we want to remove
     */


    _createClass(SnackbarProvider, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                maxSnack = _props.maxSnack,
                initialSnacks = _props.initialSnacks,
                props = _objectWithoutProperties(_props, ['children', 'maxSnack', 'initialSnacks']);

            var snacks = this.state.snacks;


            return _react2.default.createElement(
                _SnackbarContext2.default.Provider,
                { value: this.handlePresentSnackbar },
                _react2.default.createElement(
                    _react.Fragment,
                    null,
                    children,
                    snacks.map(function (snack, index) {
                        return _react2.default.createElement(_SnackbarItem2.default, _extends({}, props, {
                            key: snack.key,
                            level: index,
                            snack: snack,
                            onClose: _this2.handleCloseSnack,
                            onExited: _this2.handleExitedSnack
                        }));
                    })
                )
            );
        }
    }]);

    return SnackbarProvider;
}(_react.Component);

SnackbarProvider.propTypes = {
    children: _propTypes2.default.element.isRequired,
    /**
     * Maximum snackbars that can be stacked
     * on top of one another
     */
    maxSnack: _propTypes2.default.number,
    /**
     * Snackbars to be displayed initially
     */
    initialSnacks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        variant: _propTypes2.default.oneOf(['error', 'success', 'warning', 'info']).isRequired,
        message: _propTypes2.default.string.isRequired
    }))
};

SnackbarProvider.defaultProps = {
    maxSnack: 3,
    initialSnacks: []
};

exports.default = SnackbarProvider;