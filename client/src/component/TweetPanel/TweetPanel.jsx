import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import PropTypes from 'prop-types'
import AppState from '../../store/AppState'

import TweetCard from '../TweetCard/TweetCard'
import './TweetPanel.scss'

@inject('appStates') @observer
class TweetPanel extends Component {
  tweetsMapper = () => {
    return (this.props.appStates.tweets.map((tweet) => {
      return (
        <TweetCard
          key={tweet.id}
          fav={tweet.favorite_count}
          retweet={tweet.retweet_count}
          text={tweet.text}
          tags={tweet.entities.hashtags}
          time={tweet.created_at}
          userName={tweet.user.name}
          account={tweet.user.screen_name}
          picUrl={tweet.user.profile_image_url_https}
        />
      )
    }))
  }

  render () {
    return (
      <div>
        {this.props.appStates.isSearching && <div className='loader' />}
        {
          !this.props.appStates.isSearching &&
          this.props.appStates.tweets.length === 0 &&
          (
            <div className='not-found-message'>
              No Tweets Found!
            </div>
          )
        }
        {this.tweetsMapper()}
      </div>
    )
  }
}

export default TweetPanel

TweetPanel.propTypes = {
  appStates: PropTypes.instanceOf(AppState)
}
