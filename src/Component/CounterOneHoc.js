import React, { Component } from 'react'
import counterHOC from './counterHOC'

class CounterOneHoc extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>count {count} times</button>
      </div>
    )
  }
}

export default counterHOC(CounterOneHoc)