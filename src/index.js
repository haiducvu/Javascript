import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { render } from "@testing-library/react";
import Form from "./components/Form";
class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = { seconds: 0 };
  }
  incrementCounter() {
    // this.state=this.state+1;
    this.setState((preSate, props) => ({
      seconds: preSate.seconds + 1,
    }));
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.incrementCounter(), 1000);
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>This is counter machine: </h1>
        <h2>Seconds:{this.state.seconds} s</h2>
        <Form></Form>
      </div>
    );
  }
}
const element = (
  <Counter
  // name="hai"
  // email="duchaivu1997@gmail.com"
  // otherInfomation="I am newbie"
  />
);
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(element, document.getElementById("root"));
