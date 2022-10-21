import React, { Component } from 'react';

export class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });

    if (value < 1) {
      this.setState({
        infoText: "Select number from 1 to 32",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <h3>Number of Events</h3>
        <label>Number of Events: </label>
        <input
          type='number'
          className='numberOfEvents'
          id="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;