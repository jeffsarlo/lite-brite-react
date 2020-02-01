import React, { Component } from 'react'
import Light from '../Light/Light'
import './Display.css'
import '../Light/Light.css'

class Display extends Component {

  // invoke createDisplay when page loads
  componentDidMount () {
    this.createDisplay()
  }

  // create display array and send to setDisplay
  createDisplay = () => {
    const displayArray = []
    for (let i = 0; i < this.props.bulbs; i++) {
      displayArray.push(
        <Light
          key={i}
          id={i}
          display={ this.props.display }
          color={ this.props.color }
          addColorPegHandler={ this.props.addColorPegHandler }
        />
      )
    }
    this.props.setDisplay(displayArray)
  }


  render () {
    return (
      <div className="display">
        {this.props.display}
      </div>
    )
  }
}

export default Display
