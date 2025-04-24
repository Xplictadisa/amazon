import React, { Component, createContext } from 'react'
import ProductData from '../data/productData'
import ComponentA from './ComponentA'

const userContext = createContext()
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer



export class MainContext extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      product: ProductData,
      imagePos: 0,
      showHeart: false,
      count: 0
    }
  }

  changePreview = (pos) => {
    this.setState({
      imagePos: pos
    })
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  }

  toggleHeartandTime = (param) => {
    this.setState({
      showHeart: param
    })
  }

  render() {
    
    return (
      <UserProvider value={{
        count: this.state.count,
        incrementCount: this.incrementCount
      }}>
        <ComponentA />
      </UserProvider>
    )
  }
}

export default MainContext
export {UserConsumer, UserProvider}