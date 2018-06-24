import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Parser from 'html-react-parser'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import AppState from '../../store/AppState'

import './TweetCard.scss'

@inject('appStates') @observer
class TweetCard extends Component {
  textParser = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    let res = text.replace(urlRegex, (url) => {
      return '<a target="_blank" href="' + url + '">' + url + '</a>'
    })

    const hashRegex = /(#[^\s]+)/g
    res = res.replace(hashRegex, (url) => {
      return '<span>' + url + '</span>'
    })

    return res
  }

  tagMapper = () => {
    return this.props.tags.map((tag, i) => {
      return (
        <div key={tag + i} className='tweet-card-body-hashtag-tags'>{'#' + tag.text}</div>
      )
    })
  }

  render () {
    return (
      <div className='tweet-card-container'>
        <div className='tweet-card-img'>
          <img src={this.props.picUrl} />
        </div>

        <div className='tweet-card-body'>
          <div className='tweet-card-body-title'>
            <span className='tweet-card-body-title-name'>{this.props.userName}</span>
            <span className='tweet-card-body-title-id'>
              <a target='_blank' href={'https://twitter.com/' + this.props.account}>
                @{this.props.account}
              </a>
            </span>
            <span className='tweet-card-body-title-time'>
              <TimeAgo date={this.props.time} live={false} />
            </span>
          </div>
          <div className='tweet-card-body-content'>
            {Parser(this.textParser(this.props.text))}
          </div>
          <div className='tweet-card-body-hashtag'>
            {this.tagMapper()}
          </div>

          <div className='tweet-card-body-footer'>
            <span><i className='material-icons'>repeat</i> {this.props.retweet}</span>
            <span><i className='material-icons'>favorite</i> {this.props.fav}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TweetCard

TweetCard.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
