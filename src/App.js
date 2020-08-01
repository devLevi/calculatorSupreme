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

  onClick = (button) => {
    if (button === '=') {
      this.calculate()
    } else if (button === 'AC') {
      this.reset()
    } else if (button === 'C') {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button,
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || '') + '',
      })
    } catch (e) {
      this.setState({
        result: 'error',
      })
    }
  }

  reset = () => {
    this.setState({
      result: '',
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='calculator'>
          <Display result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App
