import React, { Component } from 'react'
import { UserConsumer } from './MainContext'

export class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const {count, incrementCount} = value
          return <button onClick={incrementCount}>Count {count} times</button>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentC