import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'
import createMemoryHistory from 'history/createMemoryHistory'

import {options} from '../defaults'

let history

export default function getHistory() {

  if (history) {
    return history
  }

  const { historyMode } = options

  const historyModes = {
    browser: createBrowserHistory,
    hash: createHashHistory,
    memory: createMemoryHistory,
  }

  history = historyModes[historyMode]()

  return history
}
