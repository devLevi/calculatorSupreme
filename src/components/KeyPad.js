import React, { Component } from 'react'

class KeyPad extends Component {
  render() {
    return (
      <>
        <button
          name='AC'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='function-btn'>
          AC
        </button>
        <button
          name='+/-'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='function-btn'>
          +/-
        </button>
        <button
          name='%'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='function-btn'>
          %
        </button>
        <button
          name='/'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='operator-btn'>
          &divide;
        </button>

        <button
          name='7'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          7
        </button>
        <button
          name='8'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          8
        </button>
        <button
          name='9'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          9
        </button>
        <button
          name='*'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='operator-btn'>
          x
        </button>

        <button
          name='4'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          4
        </button>
        <button
          name='5'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          5
        </button>
        <button
          name='6'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          6
        </button>
        <button
          name='7'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='operator-btn'>
          -
        </button>

        <button
          name='1'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          1
        </button>
        <button
          name='2'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          2
        </button>
        <button
          name='3'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          3
        </button>
        <button
          name='+'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='operator-btn'>
          +
        </button>

        <button
          name='0'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'
          id='span-two'>
          0
        </button>
        <button
          name='.'
          onClick={(e) => this.props.onClick(e.target.name)}
          className='num-btn'>
          .
        </button>
        <button
          name='='
          onClick={(e) => this.props.onClick(e.target.name)}
          className='operator-btn'>
          =
        </button>
      </>
    )
  }
}

export default KeyPad
