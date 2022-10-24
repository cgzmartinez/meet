import React, { Component } from 'react';

export class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });

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
      </div>
    );
  }
}

export default NumberOfEvents;