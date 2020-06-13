import React, { Component } from 'react';

import { connect } from "react-redux";

class OrderHistory extends Component {
    constructor(props) {
        super(props)


    }



    render() {
        const { orders } = this.props
        return (
            <div >

                <ul className="list-group">
                    {orders.map((item) => (
                        <li className="list-group-item ">
                            <span className="mx-2">{item.id}</span>
                            <span className="mx-2">{item.totalPrice}</span>

                        </li>
                    ))}
                </ul>

            </div>

        )
    }

}

const mapStateToProps = (state) => ({
    orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

