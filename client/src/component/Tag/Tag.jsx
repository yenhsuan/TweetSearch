import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import './Tag.scss'

@inject('appStates') @observer
class Tag extends Component {
  remove = (tagName) => {
    const idx = this.props.appStates.hashtags.indexOf(tagName)
    if (idx !== -1) {
      this.props.appStates.hashtags.splice(idx, 1)
    }
  }

  render () {
    return (
      <div className='tag'>
        {this.props.str}
        <i
          className='material-icons material-icons-small tag-btn'
          onClick={() => { this.remove(this.props.str) }}
        >
          clear
        </i>
      </div>
    )
  }
}

export default Tag

Tag.propTypes = {
  str: PropTypes.string
}
