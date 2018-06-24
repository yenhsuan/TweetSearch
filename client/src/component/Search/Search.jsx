import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import axios from 'axios'
import PropTypes from 'prop-types'
import AppState from '../../store/AppState'
import Tag from '../Tag/Tag'
import SortButtonGroup from '../SortButtonGroup/SortButtonGroup'
import Comparator from '../../common/comparator'

import banner from '../../../public/img/banner.png'
import './Search.scss'

@withRouter @inject('appStates') @observer
class Search extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
  }

  tagMapper = () => {
    return (
      this.props.appStates.hashtags.map((n) => {
        return (
          <Tag key={n} str={n} />
        )
      })
    )
  }

  tagAdder = () => {
    if (this.props.appStates.inputTagValues === '') {
      return
    }

    if (this.props.appStates.inputTagValues.charAt(0) !== '#') {
      this.props.appStates.inputTagValues = '#' + this.props.appStates.inputTagValues
    }

    const idx = this.props.appStates.hashtags.indexOf(this.props.appStates.inputTagValues)
    if (idx !== -1) {
      this.props.appStates.inputTagValues = ''
      this.inputRef.current.value = ''
      return
    }
    this.props.appStates.hashtags.push(this.props.appStates.inputTagValues)
    this.props.appStates.inputTagValues = ''
    this.inputRef.current.value = ''
  }

  tagInputChangeHandler = (e) => {
    this.props.appStates.inputTagValues = e.target.value.trim()
    this.inputRef.current.value = this.props.appStates.inputTagValues
  }

  tweetsNumSelectHandler = (n) => {
    this.props.appStates.tweetsCount = n
  }

  searchHandler = () => {
    const q = this.props.appStates.hashtags.join(' OR ')
    const num = this.props.appStates.tweetsCount
    this.props.appStates.isSearching = true
    this.props.appStates.tweets = []
    axios.post('http://localhost:3000/api/v1/search', {
      query: q,
      count: num
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log('Error in fectching data from server')
          this.props.appStates.isSearching = false
          return
        }

        res.data.statuses.forEach((data) => {
          this.props.appStates.tweets.push(data)
        })
        console.log(res)
        if (this.props.appStates.sortBy === 'time') {
          this.props.appStates.tweets.replace(
            this.props.appStates.tweets.slice().sort(Comparator.timeComparator)
          )
        } else if (this.props.appStates.sortBy === 'fav') {
          this.props.appStates.tweets.replace(
            this.props.appStates.tweets.slice().sort(Comparator.favComparator)
          )
        } else if (this.props.appStates.sortBy === 'retweet') {
          this.props.appStates.tweets.replace(
            this.props.appStates.tweets.slice().sort(Comparator.retweetComparator)
          )
        }
        this.props.appStates.isSearching = false
      })
      .catch((error) => {
        console.log(error)
        this.props.appStates.isSearching = false
      })
  }

  render () {
    return (
      <div className='search-panel'>
        <div className='search-panel-banner'>
          <img src={banner} />
        </div>
        <div className='search-panel-settings'>
          <input
            type='text'
            id='keyword'
            name='keyword'
            placeholder='#hashtag'
            onChange={(e) => this.tagInputChangeHandler(e)}
            ref={this.inputRef}
          />
          <a className='search-panel-btn search-panel-btn-add' onClick={() => this.tagAdder()}>
            <i className='material-icons'>add</i>
          </a>
          <ul className='search-panel-select'>
            <li
              className={
                this.props.appStates.tweetsCount === 10 ? 'search-panel-select-left-li active' : 'search-panel-select-left-li'
              }
              onClick={() => { this.tweetsNumSelectHandler(10) }}
            >
              10
            </li>
            <li
              className={
                this.props.appStates.tweetsCount === 20 ? 'active' : ''
              }
              onClick={() => { this.tweetsNumSelectHandler(20) }}
            >
              20
            </li>
            <li
              className={
                this.props.appStates.tweetsCount === 50 ? 'active' : ''
              }
              onClick={() => { this.tweetsNumSelectHandler(50) }}
            >
              50
            </li>
            <li
              className={
                this.props.appStates.tweetsCount === 100 ? 'active' : ''
              }
              onClick={() => { this.tweetsNumSelectHandler(100) }}
            >
              100
            </li>

            <li className='search-panel-select-right-li'> Tweets</li>
          </ul>

          <Link to='/result' onClick={() => this.searchHandler()}>
            <span className='search-panel-btn search-panel-btn-search'>Search</span>
          </Link>
          <SortButtonGroup />
        </div>
        <div className='search-panel-tags-area'>
          {this.tagMapper()}
        </div>
      </div>
    )
  }
}

export default Search

Search.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
