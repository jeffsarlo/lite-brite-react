import React from 'react'
import './ColorBoard.css'

const ColorBoard = props => {
  return (
    <div className="color-board">
      <h1>Lite&#9679;Brite</h1>
      <div className="selected-container">
        <p>SELECTED</p>
        <div className={'selected ' + props.selectedColor}></div>
        <div className="clearPeg" onClick={ (e) => props.changeColor(e) }></div>
        <p>CLEAR</p>
      </div>
      <div className="palette">
        <div className="color red-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color blue-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color yellow-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color green-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color orange-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color pink-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color purple-peg" onClick={ (e) => props.changeColor(e) }></div>
        <div className="color white-peg" onClick={ (e) => props.changeColor(e) }></div>
      </div>
    </div>
  )
}

export default ColorBoard
