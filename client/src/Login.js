import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleClick = event => {
    this.props.handleLogin(this.state.value);
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default Login;
