import { observable } from 'mobx'

export default class AppState {
  @observable inputTagValues = ''
  @observable hashtags
  @observable tweetsCount = 10
  @observable isSearching = false
  @observable sortBy = 'time'

  constructor () {
    this.hashtags = []
  }
}
