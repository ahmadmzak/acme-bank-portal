import React, { Component } from "react";
import "./StatusBar.css";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  handleClick = () => {
    this.props.logOut();
  };
  render() {
    return (
      <div className="status">
        <div className="status-name">Logged in as: {this.props.name}</div>
        <div className="status-date">{this.state.date.toDateString()}</div>
        <button className="status-btn" onClick={this.handleClick}>
          Logout
        </button>
      </div>
    );
  }
}

export default StatusBar;
