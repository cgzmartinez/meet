import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true
  };

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed })
  };

  toggleBtnText = () => {
    return `${this.state.collapsed
      ? 'Show Details'
      : 'Hide Details'
      }`;
  };

  renderButtonText = () => {
    return !this.state.isExpanded ? "Show details" : "Hide details";
  };

  render() {
    const { event } = this.props;

    return (
      <div className='event'>
        <h2 className='summary'>{event.summary}</h2>
        <div className='dateTime'>{event.start.dateTime}</div>
        <br></br>
        <div className='location'>@ {event.summary} | {event.location}</div>
        <button
          className="btn-text"
          onClick={this.handleClick}>
          {this.toggleBtnText()}
        </button>
        {!this.state.collapsed && (
          <p className="description">
            <h3>{event.description}</h3>
            <p>
              <a className="link" target="_blank" href="{event.htmlLink}"> Add to Calendar</a>
            </p>
          </p>

        )}
      </div>
    );
  }
}
export default Event;