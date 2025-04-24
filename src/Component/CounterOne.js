import React, { Component } from 'react'

class CounterOne extends Component {
  render() {
    console.log(this.props)
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>Click {count} Times</button>
      </div>
    )
  }
}

export default CounterOne