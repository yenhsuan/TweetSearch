import { observable } from 'mobx'

export default class AppState {
  @observable tweets = []
  @observable test

  @observable inputTagValues = ''
  @observable hashtags
  @observable tweetsCount = 10
  @observable isSearching = false

  constructor () {
    this.test = 'test message'
    this.hashtags = []
  }
}
