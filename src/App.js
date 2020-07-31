import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          <p className='display-text'>Hello World!</p>
        </div>
        <div className='row'>
          <button className='function-btn span-two'>CE</button>
          <button className='function-btn'>+/-</button>
          <button className='operator-btn'>÷</button>
        </div>
        <div className='row'>
          <button className='num-btn'>7</button>
          <button className='num-btn'>8</button>
          <button className='num-btn'>9</button>
          <button className='operator-btn'>x</button>
        </div>
        <div className='row'>
          <button className='num-btn'>4</button>
          <button className='num-btn'>5</button>
          <button className='num-btn'>6</button>
          <button className='operator-btn'>-</button>
        </div>
        <div className='row'>
          <button className='num-btn'>1</button>
          <button className='num-btn'>2</button>
          <button className='num-btn'>3</button>
          <button className='operator-btn'>+</button>
        </div>
        <div className='row'>
          <button className='num-btn span-two'>0</button>
          <button className='num-btn'>.</button>
          <button className='operator-btn'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
