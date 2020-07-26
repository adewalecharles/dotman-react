import React from "react";
import "./product.css";
import DataService from "../services/data-service.js";

let ds = new DataService();
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked = () => {
    ds.addWishlistItem(this.props.product);
  };
  render() {
    return (
      <div className="card product">
        <img
          className="card-img-top"
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
          alt="User"
        ></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.product.title}</h4>
          <p className="card-text">Director: {this.props.product.director}</p>
          <a
            href="#"
            onClick={() => this.onButtonClicked()}
            className="btn btn-primary"
          >
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
