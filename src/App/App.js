import React from "react";
import logo from "./logo.svg";
import "./App.css";
//services
import HttpService from "../services/http-service";

//components
import Product from "../product/product.js";
import Wishlist from "../wishlist/wishlist.js";
const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(
      (results) => {
        self.setState({ products: results.results });
      },
      (err) => {}
    );
  };

  productList = () => {
    const list = this.state.products.map((product) => (
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
    ));
    return list;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Star Wars Movies</h2>
        </header>
        <div className="container App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">{this.productList()}</div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
