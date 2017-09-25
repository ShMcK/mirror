'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Router;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterRedux = require('react-router-redux');

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Router(_ref) {
  var _ref$history = _ref.history,
      history = _ref$history === undefined ? (0, _history2.default)() : _ref$history,
      children = _ref.children;

  return _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: history },
    children
  );
}

Router.propTypes = {
  children: _propTypes2.default.element.isRequired,
  history: _propTypes2.default.object
};