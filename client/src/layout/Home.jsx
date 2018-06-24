import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter, Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import AppState from '../store/AppState'

import Search from '../component/Search/Search'
import About from '../component/About/About'
import TweetPanel from '../component/TweetPanel/TweetPanel'

@inject('appStates') @withRouter @observer
class Home extends Component {
  render () {
    return (
      <div>
        <Search />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/result' component={TweetPanel} />
          <Route component={About} />
        </Switch>
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
