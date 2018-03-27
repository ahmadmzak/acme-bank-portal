import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>{`Welcome ${props.name}`}</h1>
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
              <td>{`${acc.type[0].toUpperCase() +
                acc.type.substring(1).toLowerCase()} Account`}</td>
              <td>{acc.account_number}</td>
              <td>USD</td>
              <td>{acc.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
