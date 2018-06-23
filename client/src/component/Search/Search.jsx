import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import axios from 'axios'
import PropTypes from 'prop-types'
import AppState from '../../store/AppState'

import Tag from '../Tag/Tag'
import './Search.scss'

@inject('appStates') @observer
class Search extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
  }

  tagMapper = () => {
    console.log('mapper')
    return (
      this.props.appStates.hashtags.map((n) => {
        console.log('sda')
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

    const idx = this.props.appStates.hashtags.indexOf(this.props.appStates.inputTagValues)
    console.log(idx)
    if (idx !== -1) {
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
    const q = this.props.appStates.hashtags.join(' ')
    const num = this.props.appStates.tweetsCount
    this.props.appStates.isSearching = false
    axios.post('http://localhost:3000/api/v1/search', {
      query: q,
      count: num
    })
      .then((res) => {
        this.props.appStates.isSearching = false
        if (res.status !== 200) {
          console.log('Error in fectching data from server')
          return
        }
        console.log(res)
        res.data.statuses.forEach((data) => {
          this.props.appStates.tweets = data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='search-panel'>
        <div>
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
          <a className='search-panel-btn search-panel-btn-search' onClick={() => this.searchHandler()}>
            Search
          </a>
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
