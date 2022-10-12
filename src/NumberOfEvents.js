import React, { Component } from 'react';

export class NumberOfEvents extends Component {

  state = {
    numEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numEvents: value,
    });
  };

  render() {
    const { numEvents } = this.state;

    return (
      <div>
        <input
          type='text'
          className='number'
          value={numEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;