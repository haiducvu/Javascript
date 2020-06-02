import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Component
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li className="active">
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
