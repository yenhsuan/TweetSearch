import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import PropTypes from 'prop-types'
import AppState from '../../store/AppState'
import Comparator from '../../common/comparator'

import './SortButtonGroup.scss'

@inject('appStates') @observer
class SortButtonGroup extends Component {
  clickHandler = (sort, comparator) => {
    if (this.props.appStates.sortBy === sort) {
      return
    }
    this.props.appStates.sortBy = sort
    this.props.appStates.tweets.replace(this.props.appStates.tweets.slice().sort(comparator))
  }

  render () {
    return (
      <span className='sort'>
        <a
          className={this.props.appStates.sortBy === 'time' ? 'sort-btn sort-btn-active' : 'sort-btn'}
          onClick={() => { this.clickHandler('time', Comparator.timeComparator) }}
        >
          <i className='material-icons'>access_time</i>
        </a>
        <a
          className={this.props.appStates.sortBy === 'retweet' ? 'sort-btn sort-btn-active' : 'sort-btn'}
          onClick={() => { this.clickHandler('retweet', Comparator.retweetComparator) }}
        >
          <i className='material-icons'>repeat</i>
        </a>
        <a
          className={this.props.appStates.sortBy === 'fav' ? 'sort-btn sort-btn-active' : 'sort-btn'}
          onClick={() => { this.clickHandler('fav', Comparator.favComparator) }}
        >
          <i className='material-icons'>favorite</i>
        </a>
      </span>
    )
  }
}

export default SortButtonGroup

SortButtonGroup.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
