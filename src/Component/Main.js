import React, { Component } from 'react'
import ProductData from '../data/productData'
import ProdPreview from './ProdPreview'
import ProdDetails from './ProdDetails'
import Description from './Description'
import Choices from './Choices'
import style from '../Asset/styles/Main.module.css'





export class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      product: ProductData,
      imagePos: 0,
      showHeart: false
    }
  }

  changePreview = (pos) => {
    this.setState({
      imagePos: pos
    })
  }

  toggleHeartandTime = (param) => {
    this.setState({
      showHeart: param
    })
  }

  render() {
    const {description, title} = this.state.product
    const preview = ProductData.colorOptions[this.state.imagePos].imageUrl;
    return (
      <div className={style.container}>
        <ProdPreview className={style.preview} preview={preview} showHeart={this.state.showHeart}/>
        <ProdDetails className={style.details}>
          <Description Desc={description} title={title}/>
          <Choices prod={this.state.product} imgPrev={this.changePreview} imgPos={this.state.imagePos} toggle={this.toggleHeartandTime}/>
        </ProdDetails>
      </div>
    )
  }
}

export default Main