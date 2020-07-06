import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleKeyPress(target) {
    if (target.charCode == 13) {
      alert("Enter clicked!!!");
    }
  }
  handleSubmit = (event) => {
    alert(`${this.state.username}  ${this.state.password}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            onKeyPress={this.handleKeyPress}
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            onKeyPress={this.handleKeyPress}
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default Form;
