import React, { Component } from 'react'
import Display from './Components/Display/Display'
import ColorBoard from './Components/ColorBoard/ColorBoard'
import './App.css'

class App extends Component {
  state = {
    color: 'bulb',
    selectedColor: 'bulb',
    bulbs: 3496,
    display: []
  }

  // create display
  setDisplay = displayArray => {
    this.setState({ display: displayArray })
  }

  // add colored peg
  addColorPegHandler = (e) => {
    const display = [...this.state.display]
    const clicked = e.target
    const id = e.target.id
    let clickedCell = {...display[id]}

    clickedCell.className = this.state.color
    display[id] = clickedCell

    this.setState({ display }, () => {
      clicked.className = this.state.display[id].className
    })
  }

  // change the color
  changeColorHandler = (e) => {
    switch (e.target.className) {
      case('color red-peg'):
        this.setState({ color: 'bulb red', selectedColor: 'red-peg'})
        break
      case('color blue-peg'):
        this.setState({ color: 'bulb blue', selectedColor: 'blue-peg'})
        break
      case('color green-peg'):
        this.setState({ color: 'bulb green', selectedColor: 'green-peg'})
        break
      case('color orange-peg'):
        this.setState({ color: 'bulb orange', selectedColor: 'orange-peg'})
        break
      case('color yellow-peg'):
        this.setState({ color: 'bulb yellow', selectedColor: 'yellow-peg'})
        break
      case('color pink-peg'):
        this.setState({ color: 'bulb pink', selectedColor: 'pink-peg'})
        break
      case('color purple-peg'):
        this.setState({ color: 'bulb purple', selectedColor: 'purple-peg'})
        break
      case('color white-peg'):
        this.setState({ color: 'bulb white', selectedColor: 'white-peg'})
        break
      case('clear-peg'):
        this.setState({ color: 'bulb clear', selectedColor: 'clear-peg'})
        break
      default:
        this.setState({ color: 'bulb clear', selectedColor: 'clear-peg'})
    }
  }

  render () {
    return (
      <div className="App">
        <Display
          color={ this.state.color }
          addColorPegHandler={ this.addColorPegHandler}
          bulbs={this.state.bulbs}
          display={this.state.display}
          setDisplay={this.setDisplay}
        />
        <ColorBoard
          color = { this.state.color }
          selectedColor = { this.state.selectedColor }
          changeColor={ this.changeColorHandler }
        />
      </div>
    )
  }
}

export default App
