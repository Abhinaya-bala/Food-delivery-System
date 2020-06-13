import React, { Component } from "react";
import { connect } from "react-redux";

import { addToOrder } from "../Redux/action";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart, addToOrder } = this.props;
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    return (
      <div>
        <ul class="list-group">
          {cart.map((item) => (
            <li class="list-group-item ">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        <div>
          Total amount: {totalPrice}
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => addToOrder({ id: Date.now(), cart: cart, totalPrice: totalPrice })}
          >
            Order
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
