import React from "react";
import "./product-condensed.css";

class ProductCondensed extends React.Component {
  render() {
    return (
      <li className="list-group-item pc-condensed">
        <a className="btn btn-outline-danger">X</a>
        <p>{this.props.product.title}</p>
      </li>
    );
  }
}

export default ProductCondensed;
