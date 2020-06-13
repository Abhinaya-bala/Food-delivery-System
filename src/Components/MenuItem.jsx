import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../Redux/action";

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item, addToCart } = this.props;
        return (
            <li class="list-group-item flex ">
                <span className="mx-2">{item.name}</span>
                <span className="mx-2">Rs.{item.price}</span>
                <span className="mx-2">
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            addToCart({ id: item.id, price: item.price, name: item.name })
                        }
                    >
                        Add to Cart
          </button>
                </span>
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
