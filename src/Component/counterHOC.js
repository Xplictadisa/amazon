import React, { Component } from 'react'

function counterHOC(WrappedComp) {
  class CounterHOC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    incrementCount = () => {
      this.setState((prevState) => {
        return {count: prevState.count + 1}
      })
    }


    render() {
      const {count} =this.state
      return (
        <WrappedComp count={count} incrementCount={this.incrementCount}/>
      )
    }
  }

  return (
    CounterHOC
  )
}

export default counterHOC