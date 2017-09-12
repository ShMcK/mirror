import React from 'react'

import mirror, {render} from 'mirrorx'
import {Router} from 'mirror-router'
import App from './App'

mirror.defaults({
  historyMode: 'browser'
})

render(
  <Router>
    <App/>
  </Router>
, document.getElementById('root'))
