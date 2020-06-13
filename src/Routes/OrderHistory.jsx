import React, { Component } from "react";

import { connect } from "react-redux";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { orders } = this.props;
    return (
      <div className="col-8 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order id</th>
              <th scope="col">Total price</th>
              <th scope="col">Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr>
                <th scope="row">1</th>
                <td>#{item.id}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {item.cart.map((food) => (
                    <div>
                      <span className="mx-2">{food.name}</span>
                      <span className="mx-2">{food.price}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
