import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { render } from "@testing-library/react";
// import App from "./App";
class UserDetail extends React.Component {
  render() {
    return (
      <div>
        <p>Name:{this.props.name}</p>
        <p>Email:{this.props.email}</p>
      </div>
    );
  }
}
class UserotherInfo extends React.Component {
  render() {
    return (
      <div>
        <p>Thong tin co ban: {this.props.otherInfomation}</p>
      </div>
    );
  }
}
class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <UserDetail name={this.props.name} email={this.props.email} />
        <UserotherInfo otherInfomation={this.props.otherInfomation} />
      </div>
    );
  }
}
const element = (
  <UserInfo
    name="hai"
    email="duchaivu1997@gmail.com"
    otherInfomation="I am newbie"
  />
);
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(element, document.getElementById("root"));
