import React, { Component } from "react";
import Header from "./Header";
import StatusBar from "./StatusBar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Transactions from "./Transactions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    /*this.userinfo = {
      accounts: [
        {
          transactions: [
            {
              date: "02/28/2018",
              transaction: "WWW.AMAZON.COM USA 50.00 871397133470",
              currency: "USD",
              deposit: 0,
              withdrawal: 50,
              closing: 223
            }
          ],
          type: "current",
          account_number: 1290127890123,
          balance: 223
        },
        {
          transactions: [
            {
              date: "02/19/2018",
              transaction: "ATM TFR",
              currency: "USD",
              deposit: 500,
              withdrawal: 0,
              closing: 7500
            }
          ],
          type: "savings",
          account_number: 2945278501244,
          balance: 7500
        }
      ],
      _id: "5ab941fc7279b47986e49ef4",
      username: "zillah",
      name: "Zillah Lutjens",
      email: "Zillah.Lutjens@examp8le.com",
      phone: "+1259 637 3382",
      address: "1093, 5th St, Brookings, Curry, Oregon"
    };*/
    this.state = {
      login: false,
      view: "dashboard"
    };
  }
  componentDidMount() {
    //this.handleLogin("junior425");
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
