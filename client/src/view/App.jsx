import React from 'react'
import { hot } from 'react-hot-loader'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@inject('appState') @withRouter @observer
class App extends React.Component {
  render () {
    return (
      <div>
        Test
        {this.props.appState.test}
      </div>
    )
  }
}

export default hot(module)(App)
