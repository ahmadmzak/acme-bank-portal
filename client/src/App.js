import React, { Component } from "react";
import Header from "./Header/Header";
import StatusBar from "./StatusBar/StatusBar";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Transactions from "./Transactions/Transactions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      view: "dashboard"
    };
  }
  componentDidMount() {
    //this.handleLogin("junior");
  }
  updateInfo = (key, value) => {
    this.setState({ [key]: value });
  };
  updateView = view => {
    this.setState({ view });
  };
  handleLogin = async username => {
    const request = `/api/users/${username}`;
    try {
      const response = await fetch(request);
      const data = await response.json();
      this.userinfo = data;
      this.setState({
        login: true,
        id: this.userinfo._id,
        name: this.userinfo.name,
        email: this.userinfo.email,
        phone: this.userinfo.phone,
        address: this.userinfo.address
      });
    } catch (err) {
      console.error(err);
    }
  };
  handleLogOut = () => {
    this.setState({ login: false });
  };
  render() {
    let View = {};
    if (this.state.login) {
      View.dashboard = (
        <Dashboard
          accounts={this.userinfo.accounts}
          name={this.userinfo.name}
        />
      );
      View.profile = <Profile info={this.state} updateInfo={this.updateInfo} />;
      View.transactions = <Transactions accounts={this.userinfo.accounts} />;
    }
    return (
      <div className="App">
        <Header
          login={this.state.login}
          name={this.state.name}
          view={this.state.view}
          handleNav={this.updateView}
        />
        {this.state.login ? (
          <div>
            <StatusBar name={this.state.name} logOut={this.handleLogOut} />
            {View[this.state.view]}
          </div>
        ) : (
          <Login handleLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
