import React, { Component } from 'react'

class KeyPad extends Component {
  render() {
    return (
      <>
        <button className='function-btn'>AC</button>
        <button className='function-btn'>+/-</button>
        <button className='function-btn'>%</button>
        <button className='operator-btn'>÷</button>

        <button className='num-btn'>7</button>
        <button className='num-btn'>8</button>
        <button className='num-btn'>9</button>
        <button className='operator-btn'>x</button>

        <button className='num-btn'>4</button>
        <button className='num-btn'>5</button>
        <button className='num-btn'>6</button>
        <button className='operator-btn'>-</button>

        <button className='num-btn'>1</button>
        <button className='num-btn'>2</button>
        <button className='num-btn'>3</button>
        <button className='operator-btn'>+</button>

        <button className='num-btn' id='span-two'>
          0
        </button>
        <button className='num-btn'>.</button>
        <button className='operator-btn'>=</button>
      </>
    )
  }
}

export default KeyPad
