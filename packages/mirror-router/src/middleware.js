import {routerMiddleware} from 'react-router-redux'
import getHistory from './history'

export default (options) => (
  routerMiddleware(getHistory(options))
)
