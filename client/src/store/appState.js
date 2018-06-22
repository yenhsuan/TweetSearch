import { observable } from 'mobx'

export default class AppState {
  @observable tweets
  @observable test
  constructor () {
    this.tweets = []
    this.test = 'aaa'
  }
}
