import React from 'react'
import './Light.css'

const Light = props => {
  return (
    <div
      className= { props.color }
      id={ props.id }
      onClick={ (e) => props.addColorPegHandler(e) }
    >
    </div>
  )
}

export default Light
