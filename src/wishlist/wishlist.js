import React from "react";
import "./wishlist.css";
import DataService from "../services/data-service.js";
import NotificationService, {
  NOTIF_WISHLIST_CHANGED,
} from "../services/notification-service.js";

import ProductCondensed from "../product-condensed/product-condensed";
let ns = new NotificationService();
class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Wishlist: [] };
    //bind functions

    this.createWishlist = this.createWishlist.bind(this);
    this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }
  componentDidMount() {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this.onWishlistChanged);
  }
  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishlistChanged(newWishlist) {
    this.setState({ Wishlist: newWishlist });
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
