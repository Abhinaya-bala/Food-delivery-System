import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../Redux/action";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isItemAdded: false,
    };
  }

  render() {
    const { item, addToCart } = this.props;
    return (
      <li class="list-group-item flex flex-row justify-content-between align-items-center my-2 ">
        <div>
          <i className="fas fa-hamburger"></i>
          <span className="mx-2">{item.name}</span>
          <span className="mx-2">Rs.{item.price}</span>
          {this.state.isItemAdded ? <p>This item added to cart</p> : ""}
        </div>
        <div>
          {this.state.isItemAdded ? (
            ""
          ) : (
            <span className="mx-2">
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToCart({
                    id: item.id,
                    price: item.price,
                    name: item.name,
                  });
                  this.setState({ isItemAdded: true });
                }}
              >
                Add to Cart
              </button>
            </span>
          )}
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
