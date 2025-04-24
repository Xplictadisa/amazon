import React from 'react'

export default function Description(props) {
  
  const {title, Desc} = props
  return (
    <div>
      <h2>{title}</h2>
      <p>{Desc}</p>
    </div>
  )
}
