import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import PropTypes from 'prop-types'
import AppState from '../../store/AppState'

import './ButtonGroup.scss'

@inject('appStates') @observer
class ButtonGroup extends Component {
  render () {
    return (
      <ul className='button-group'>
        <li className='button-group-left-li'>10</li>
        <li>20</li>
        <li>50</li>
        <li>100</li>
        <li className='button-group-right-li'> Tweets</li>
      </ul>
    )
  }
}

export default ButtonGroup

ButtonGroup.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
