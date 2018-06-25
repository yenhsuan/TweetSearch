import { observable } from 'mobx'

export default class AppState {
  @observable tweets = []
  @observable test

  @observable inputTagValues = ''
  @observable hashtags
  @observable tweetsCount = 10
  @observable isSearching = false
  @observable sortBy = 'time'

  constructor () {
    this.test = 'test message'
    this.hashtags = []
  }
}
