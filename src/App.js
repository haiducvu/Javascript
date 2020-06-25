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
            <Product
              name="Appple Iphone 12"
              price="20000000"
              image="https://images.samsung.com/is/image/samsung/p5/vn/galaxy-s20/pcd/pcd-kv-galaxy-z-flip-purple-mo-main.jpg?$ORIGIN_JPG$"
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product
              name="Apple Iphone 11"
              price="10000000"
              image="https://images.samsung.com/is/image/samsung/p5/vn/galaxy-s20/pcd/pcd-kv-galaxy-z-flip-purple-mo-main.jpg?$ORIGIN_JPG$"
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product
              name="Apple Iphone 10"
              price="30000000"
              image="https://images.samsung.com/is/image/samsung/p5/vn/galaxy-s20/pcd/pcd-kv-galaxy-z-flip-purple-mo-main.jpg?$ORIGIN_JPG$"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
