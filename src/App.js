import React from 'react'
import './App.css'
import Display from './components/Display'
import KeyPad from './components/KeyPad'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='calculator'>
          <Display />
          <KeyPad />
        </div>
      </div>
    )
  }
}

export default App
