import React from "react";
import "./wishlist.css";

import ProductCondensed from "../product-condensed/product-condensed";
class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Wishlist: [
        {
          title: "avengers",
          director: "Adewale Charles",
          _id: "sdlfk3ee",
        },
        {
          title: "avengers",
          director: "Adewale Charles",
          _id: "sdldk3ee",
        },
        {
          title: "avengers",
          director: "Adewale Charles",
          _id: "sdlok3ee",
        },
      ],
    };
    //bind functions

    this.createWishlist = this.createWishlist.bind(this);
  }

  createWishlist = () => {
    const list = this.state.Wishlist.map((product) => (
      <ProductCondensed product={product} key={product._id} />
    ));
    return list;
  };
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">{this.createWishlist()}</ul>
        </div>
      </div>
    );
  }
}

export default Wishlist;
