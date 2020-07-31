import React, { Component } from 'react'

class Display extends Component {
  render() {
    let { result } = this.props
    return (
      <div className='display'>
        <p className='display-text'>{result}</p>
      </div>
    )
  }
}

export default Display
