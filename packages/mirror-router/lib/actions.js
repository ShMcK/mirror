'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterRedux = require('react-router-redux');

exports.default = function (_ref) {
  var actions = _ref.actions,
      dispatch = _ref.dispatch;

  actions.routing = Object.keys(_reactRouterRedux.routerActions).reduce(function (memo, action) {
    memo[action] = function () {
      dispatch(_reactRouterRedux.routerActions[action].apply(_reactRouterRedux.routerActions, arguments));
    };
    return memo;
  }, {});
};