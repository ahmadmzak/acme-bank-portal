import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "junior" //""
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
            <div className="container">
                <input
                    type="text"
                    placeholder="username"
                    className="login"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <br />
                <button className="login" onClick={this.handleClick}>
                    login
                </button>
            </div>
        );
    }
}

export default Login;
