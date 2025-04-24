import React, { Component } from 'react'

export class ProdDetails extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ProdDetails