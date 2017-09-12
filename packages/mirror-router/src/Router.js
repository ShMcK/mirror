import React from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'react-router-redux'

import getHistory from './history'

export default function Router({history = getHistory(), children}) {
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
