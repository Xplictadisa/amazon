import React, { Component } from 'react'
import style from '../Asset/styles/ProdPreview.module.css'

export class ProdPreview extends Component {
 
  render() {
    const {showHeart} = this.props

    return (
      <div className={style.container}>
        <img className={style.prodImage} src={this.props.preview} alt='image'/>
        {
          showHeart 
           ? <div className={style.heart}>Heart</div>
           : <div className={style.heart}>Time</div>
        }
      </div>
    )
  }
}

export default ProdPreview