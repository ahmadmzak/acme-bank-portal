import React from "react";
import "./Header.css";
import logo from "./bank-logo.svg";

const Header = props => {
  this.handleBrand = event => {
    event.preventDefault();
  };
  this.handleClick = event => {
    event.preventDefault();
    props.handleNav(event.target.id);
  };
  return (
    <nav className="header">
      <a className="header-brand" href="" id="brand" onClick={this.handleBrand}>
        <img src={logo} className="logo" alt="bank-logo" />
        <h3 className="header-title">Acme Bank</h3>
      </a>
      {props.login ? (
        <ul className="header-nav">
          <li>
            <a href="" id="dashboard" onClick={this.handleClick}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="" id="profile" onClick={this.handleClick}>
              Profile
            </a>
          </li>
          <li>
            <a href="" id="transactions" onClick={this.handleClick}>
              Transactions
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
