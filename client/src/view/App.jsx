import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Home from '../layout/Home'
import './App.scss'

@inject('appStates') @withRouter @observer
class App extends Component {
  render () {
    return (
      <Home />
    )
  }
}

export default hot(module)(App)
