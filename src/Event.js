import React, { Component } from "react";

class Event extends Component {
  state = {
    isExpanded: false,
  };

  // show/hide event on click
  handleExpandEvent = () => {
    if (this.state.isExpanded === false) {
      this.setState({
        isExpanded: true,
      });
    } else {
      this.setState({
        isExpanded: false,
      });
    }
  };

  renderExpandedComponent = () => {
    if (this.state.isExpanded) {
      return (
        <div className='Expanded-Event'>
          <h3 className='about'></h3>
          <a className='link'></a>
          <p className='description'></p>
        </div>
      );
    }
  };
  render() {
    return (
      <div className='Event'>
        <h2 className='summary'></h2>
        <div className='dateTime'></div>
        <div className='timeZone'></div>
        <div className='location'></div>
        <button
          type='button'
          className='btn-details'
          onClick={this.handleExpandEvent}
        ></button>
        {this.renderExpandedComponent()}
      </div>
    );
  }
}
export default Event;