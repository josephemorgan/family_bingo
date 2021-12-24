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

  handleClick(i) {
    let number = parseInt(i.currentTarget.innerText);
    let numbers = this.state.rolledNumbers.slice();
    if (numbers.includes(number)) {
      numbers.splice(numbers.indexOf(number), 1);
      this.setState({
        rolledNumbers: numbers,
      });
    } else {
      console.log("nonduplicate entered");
      this.setState({
        rolledNumbers: numbers.concat([number])
      });
    }
  }

  render() {
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
