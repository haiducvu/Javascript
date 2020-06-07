import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img alt={this.props.name} src={this.props.image} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.price}$</p>
            <p>
              <a className="btn btn-primary">Mua Ngay</a>
              <a className="btn btn-default">Đặt Hàng</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
