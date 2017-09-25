'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Route;
  }
});
Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Switch;
  }
});
Object.defineProperty(exports, 'Redirect', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Redirect;
  }
});
Object.defineProperty(exports, 'Prompt', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Prompt;
  }
});
Object.defineProperty(exports, 'withRouter', {
  enumerable: true,
  get: function get() {
    return _reactRouter.withRouter;
  }
});

var _reactRouterDom = require('react-router-dom');

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Link;
  }
});
Object.defineProperty(exports, 'NavLink', {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.NavLink;
  }
});

var _reactRouterRedux = require('react-router-redux');

Object.defineProperty(exports, 'routerReducer', {
  enumerable: true,
  get: function get() {
    return _reactRouterRedux.routerReducer;
  }
});

var _Router = require('./Router');

Object.defineProperty(exports, 'Router', {
  enumerable: true,
  get: function get() {
    return _Router.Router;
  }
});

var _middleware = require('./middleware');

Object.defineProperty(exports, 'createRouterMiddleware', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_middleware).default;
  }
});

var _actions = require('./actions');

Object.defineProperty(exports, 'addRouterActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actions).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }