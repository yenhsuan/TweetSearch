import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import AppState from './store/AppState'
import App from './view/App'

ReactDOM.render(
  <BrowserRouter>
    <Provider appStates={new AppState()}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)

module.hot.accept()
