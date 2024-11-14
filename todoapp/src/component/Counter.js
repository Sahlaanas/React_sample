import React, { Component } from 'react'

class Counter extends Component {

  // firstClick() {
  //   console.log('Loading ....');

  // }
  state = {
    count: 0
  }

  incFunc = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount + 1
    })
  }
  decFunc = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.incFunc}> + </button>
        <button onClick={this.decFunc}> - </button>

      </div>
    )
  }
}

export default Counter