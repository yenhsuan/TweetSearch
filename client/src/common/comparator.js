const Comparator = {
  timeComparator: (self, other) => {
    const selfDate = new Date(self.created_at)
    const otherDate = new Date(other.created_at)
    return otherDate.getTime() - selfDate.getTime()
  },
  favComparator: (self, other) => {
    return other.favorite_count - self.favorite_count
  },
  retweetComparator: (self, other) => {
    return other.retweet_count - self.retweet_count
  }
}

export default Comparator
