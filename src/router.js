import React from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter, routerActions} from 'react-router-redux'

import getHistory from './history'
import {options} from './defaults'
import {dispatch} from './middleware'
import {actions} from './actions'

export default function Router({history = getHistory(), children}) {

  // Add `push`, `replace`, `go`, `goForward` and `goBack` methods to actions.routing,
  // when called, will dispatch the crresponding action provided by react-router-redux.
  actions.routing = Object.keys(routerActions).reduce((memo, action) => {
    memo[action] = (...args) => {
      dispatch(routerActions[action](...args))
    }
    return memo
  }, {})

  // ConnectedRouter will use the store from Provider automatically
  return (
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  )
}

Router.propTypes = {
  children: PropTypes.element.isRequired,
  history: PropTypes.object
}

