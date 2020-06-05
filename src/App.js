import React, { Component } from "react";
import Header from "./components/Header";
import Product from "./components/Products";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product name="Appple Ihpone 12" price="20000000" />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product name="Apple Iphone 11" price="10000000" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
