import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class CompnentA extends Component {
  render() {
    return (
      <ComponentB />
    )
  }
}

export default CompnentA