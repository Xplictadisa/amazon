import React from 'react'
import image from '../data/headerLogo'
import style from '../Asset/styles/Header.module.css'

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <img className={style.amazon} src={image.url} />
    </div>
  )
}
