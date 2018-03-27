import React, { Component } from "react";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: props.accounts[0].type
    };
  }
  handleChange = event => {
    this.setState({ account: event.target.value });
  };
  render() {
    return (
      <div>
        <label>
          Select Account:
          <select value={this.state.account} onChange={this.handleChange}>
            {this.props.accounts.map((acc, idx) => (
              <option key={idx} value={acc.type}>
                {acc.type}
              </option>
            ))}
          </select>
        </label>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Currency</th>
              <th>Deposit</th>
              <th>Withdrawal</th>
              <th>Closing Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.accounts
              .filter(acc => acc.type === this.state.account)[0]
              .transactions.map((tsx, idx) => (
                <tr key={idx}>
                  <td>{tsx.date}</td>
                  <td>{tsx.transaction}</td>
                  <td>{tsx.currency}</td>
                  <td>{tsx.deposit.toFixed(2)}</td>
                  <td>{tsx.withdrawal.toFixed(2)}</td>
                  <td>{tsx.closing.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transactions;
