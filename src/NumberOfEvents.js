import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

export class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 33 || value <= 0) {
      this.setState({
        numberOfEvents: value,
        infoText: 'Select a number between 1-32',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: '',
      });
    }
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <h3>Number of Events</h3>
        <label>Number of Events: </label>
        <input
          type='number'
          className="number-of-events-input"
          min="1"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <div className='Alert'>
          <ErrorAlert text={this.state.infoText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;