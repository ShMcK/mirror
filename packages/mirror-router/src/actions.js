import {routerActions} from 'react-router-redux'

export default ({ actions, dispatch }) => {
  // Add `push`, `replace`, `go`, `goForward` and `goBack` methods to actions.routing,
  // when called, will dispatch the corresponding action provided by react-router-redux.
  actions.routing = Object.keys(routerActions).reduce((memo, action) => {
    memo[action] = (...args) => {
      dispatch(routerActions[action](...args))
    }
    return memo
  }, {})
}
