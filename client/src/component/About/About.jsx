import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import './About.scss'

@inject('appStates') @observer
class About extends Component {
  render () {
    return (
      <div className='about-container'>
        <span className='about-heading'>
          Find the latest news and world events
        </span>
        <span className='about-sub-heading'>
          By #HashTag
        </span>
        <span className='about-copy-right'>
          Project by Yen-Hsuan (Terry) @ 2018
        </span>
      </div>
    )
  }
}

export default About

About.propTypes = {
  str: PropTypes.string
}
