import React from "react";

const Dashboard = props => {
  this.formatStr = str => {
    return str && str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <div className="container">
      <div className="table-container">
        <h1>{`Welcome ${props.name}`}</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th>Accounts</th>
              <th>Account No.</th>
              <th>Currency</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {props.accounts.map((acc, idx) => (
              <tr key={idx}>
                <td>{`${this.formatStr(acc.type)} Account`}</td>
                <td>{acc.account_number}</td>
                <td>{acc.account_currency}</td>
                <td>{acc.balance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
