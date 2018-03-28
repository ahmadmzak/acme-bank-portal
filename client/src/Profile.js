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
      <div className="container">
        <h3>Personal Information</h3>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>Id:</td>
                <td>{this.props.info.id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{this.props.info.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                {this.state.edit ? (
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={this.props.info.email}
                      onChange={this.handleChange}
                    />
                  </td>
                ) : (
                  <td>{this.props.info.email}</td>
                )}
              </tr>
              <tr>
                <td>Phone:</td>
                {this.state.edit ? (
                  <td>
                    <input
                      type="text"
                      name="phone"
                      value={this.props.info.phone}
                      onChange={this.handleChange}
                    />
                  </td>
                ) : (
                  <td>{this.props.info.phone}</td>
                )}
              </tr>
              <tr>
                <td>Address:</td>
                {this.state.edit ? (
                  <td>
                    <textarea
                      type="text"
                      name="address"
                      value={this.props.info.address}
                      onChange={this.handleChange}
                    />
                  </td>
                ) : (
                  <td>{this.props.info.address}</td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={this.toggleEdit}>
          {this.state.edit ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
}

export default Profile;
