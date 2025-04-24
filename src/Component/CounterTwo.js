import React, { Component } from 'react'

class CounterTwo extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>user Mouse over me {count} times</h2>
      </div>
    )
  }
}

export default CounterTwo