import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import PropTypes from 'prop-types'
import AppState from '../store/AppState'

import Search from '../component/Search/Search'

@inject('appStates') @observer
class Home extends Component {
  render () {
    return (
      <div>
        <Search />
        {JSON.stringify(this.props.appStates.tweets)}
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
