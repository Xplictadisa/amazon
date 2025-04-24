import React, { Component } from 'react'
import style from '../Asset/styles/Choices.module.css'

export class Choices extends Component {

  render() {
    console.log(this.props)
    const {prod, imgPrev, imgPos, toggle} = this.props;
    const prodImg = prod.colorOptions.map((item, index) => {

      let className =(imgPos === index) ? `${style.prodImg} ${style.imgSelected}` : style.prodImg
      
      return (
        <img key={index} className={className} src={item.imageUrl} alt='img' onClick={() => {imgPrev(index)}}/>
      )
    })

    return (
      <div>
        <h3>Select Color</h3>
        {prodImg}
        <h3>Features</h3>
        <div>
          <button onClick={() => {toggle(false)}} className={style.time}>{prod.featureList[0]}</button>
          <button onClick={() => {toggle(true)}} className={style.heart}>{prod.featureList[1]}</button>
        </div>
        <button>Buy Now</button>
      </div>
    )
  }
}

export default Choices