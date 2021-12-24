import React from 'react';
import MostRecentRoll from './MostRecentRoll.js';
import Grid from './Grid.js';
import Inputs from './Inputs.js';
import header from './header.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolledNumbers: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  callAPI() {
    fetch("http://localhost:5000/testAPI")
      .then(res => res.text())
      .then(res => console.log({ apiResponse: res }));
  }

  handleClick(i) {
    let number = parseInt(i.currentTarget.innerText);
    const newState = this.state.rolledNumbers.concat([number]);
    this.setState({
      rolledNumbers: newState,
    });
  }

  render() {
    this.callAPI();
    let current;
    if (this.state.rolledNumbers.length >= 1) {
      current = this.state.rolledNumbers[this.state.rolledNumbers.length - 1];
    } else {
      current = 'None';
    }

    let last;
    if (this.state.rolledNumbers.length >= 2) {
      last = this.state.rolledNumbers[this.state.rolledNumbers.length - 2];
    } else {
      last = 'None';
    }

    return (
      <div className="App">
        <img style={{ "width": "40%", "marginTop": "15px" }} src={header} alt="Family Bingo" />
        <MostRecentRoll current={current} last={last} />
        <Grid clickFunction={this.handleClick} rolledNumbers={this.state.rolledNumbers} />
        <Inputs />
      </div>
    );
  }
}

export default App;
