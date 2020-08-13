import React, { Component } from "react";
import { connect } from "react-redux";

import { addToOrder, removeFromCart } from "../Redux/action";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cart, addToOrder, history, removeFromCart } = this.props;
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    return (
      <div className="mx-5 my-5 col-6">
        <h1>Cart</h1>
        <ul class="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              class="list-group-item flex flex-row justify-content-between align-items-center my-2 "
            >
              <div>
                <i className="fas fa-hamburger"></i>
                <span className="mx-2">{item.name}</span>
                <span className="mx-2">Rs.{item.price}</span>
              </div>
              <div>
                <span className="mx-2">
                  <button className="btn btn-primary" onClick={() => removeFromCart(item.id)}>Remove</button>
                </span>

              </div>
            </li>
          ))}
        </ul>
        <div>
          <h1>Total amount: {totalPrice}</h1>
        </div>
        <div className="mx-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              addToOrder({
                id: Date.now(),
                cart: cart,
                totalPrice: totalPrice,
              });
              history.push("/OrderHistory");
            }}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToOrder: (payload) => dispatch(addToOrder(payload)),
  removeFromCart: (payload) => dispatch(removeFromCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
