'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHistory;

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createHashHistory = require('history/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = void 0;

function getHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { historyMode: 'browser' };


  if (history) {
    return history;
  }

  var historyMode = options.historyMode;


  var historyModes = {
    browser: _createBrowserHistory2.default,
    hash: _createHashHistory2.default,
    memory: _createMemoryHistory2.default
  };

  history = historyModes[historyMode]();

  return history;
}