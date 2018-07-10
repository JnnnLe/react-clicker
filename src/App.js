import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleIncClick = this.handleIncClick.bind(this)
    this.handleDecClick = this.handleDecClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
  }
  handleIncClick() {
    this.setState({
      number: this.state.number +1
    })
  }

  handleDecClick() {
    this.setState({
      number: this.state.number -1
    })
  };

  handleResetClick() {
    this.setState({
      number: 0
    })
  };

  render() {
    return (
      <div className="clicker">

        <div className="number">
          <h1>{this.state.number}</h1>
        </div>

          <button onClick={this.handleDecClick}>-</button>
          <button onClick={this.handleResetClick}>Reset</button>
          <button onClick={this.handleIncClick}>+</button>

      </div>
    );
  }
}

export default App;
