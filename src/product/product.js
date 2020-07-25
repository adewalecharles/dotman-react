import React from "react";
import "./product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="card product">
        <img className="card-img-top" src={this.props.imgUrl} alt="User"></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">Director: {this.props.price}</p>
          <a href="#" className="btn btn-primary">
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
