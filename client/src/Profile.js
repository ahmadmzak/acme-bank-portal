import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };
  handleChange = event => {
    this.props.updateInfo(event.target.name, event.target.value);
  };
  render() {
    return (
      <div>
        <label>Customer Id: {this.props.info.id}</label>
        <br />
        <label>Name: {this.props.info.name}</label>
        <br />
        <label>
          Email:{" "}
          {this.state.edit ? (
            <input
              type="text"
              name="email"
              value={this.props.info.email}
              onChange={this.handleChange}
            />
          ) : (
            this.props.info.email
          )}
        </label>
        <br />
        <label>
          Phone:{" "}
          {this.state.edit ? (
            <input
              type="text"
              name="phone"
              value={this.props.info.phone}
              onChange={this.handleChange}
            />
          ) : (
            this.props.info.phone
          )}
        </label>
        <br />
        <label>
          Address:{" "}
          {this.state.edit ? (
            <textarea
              type="text"
              name="address"
              value={this.props.info.address}
              onChange={this.handleChange}
            />
          ) : (
            this.props.info.address
          )}
        </label>
        <button onClick={this.toggleEdit}>
          {this.state.edit ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
}

export default Profile;
