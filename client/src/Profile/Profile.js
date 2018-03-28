import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  /* 
    Validates phone numbers with country codes
    Example: +XX.XXXX.XXXX, +XX XXXX XXXX, or +XX-XXXX-XXXX
  */
  isValidPhone = number => {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number);
  };
  isValidEmail = email => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  isValid = () => {
    return (
      this.props.info.email &&
      this.isValidEmail(this.props.info.email) &&
      this.props.info.phone &&
      this.isValidPhone(this.props.info.phone) &&
      this.props.info.address
    );
  };
  toggleEdit = () => {
    if (this.isValid()) this.setState({ edit: !this.state.edit });
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
