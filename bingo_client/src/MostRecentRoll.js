import React from 'react';
import './App.css';

class MostRecentRoll extends React.Component {
  getLetter(number) {
    if (number < 16) {
      return 'B';
    } else if (number < 31) {
      return 'I';
    } else if (number < 46) {
      return 'N';
    } else if (number < 61) {
      return 'G';
    } else {
      return 'O';
    }
  }

  render() {
    const current = this.props.current;
    const last = this.props.last;
    return (
      <div className="mostRecentRoll">
        {current === 'None' ? (<CurrentRoll value='None' />) : (
          <CurrentRoll value={this.getLetter(current) + "-" + current} />
        )}
        {last === 'None' ? (<LastRoll value='None' />) : (
          <LastRoll value={this.getLetter(last) + "-" + last} />
        )}
      </div>
    );
  }
}

function LastRoll(props) {
  return (
    <div className="lastRoll">
      <h1>Last: {props.value}</h1>
    </div>
  );
}

function CurrentRoll(props) {
  return (
    <div className="currentRoll">
      <h1>Current: {props.value}</h1>
    </div>
  );
}

export default MostRecentRoll;
