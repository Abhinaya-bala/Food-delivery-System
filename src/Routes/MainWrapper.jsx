import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import RestaurantWrapper from "./RestaurantWrapper"
import Menu from "./Menu"
import OrderDetails from './OrderDetails';
import OrderHistory from './OrderHistory';
import Cart from './Cart';
import Login from './Login'

class MainWrapper extends Component {
    constructor(props) {
        super(props)



    }



    render() {
        const { isAuthenticated } = this.props
        return (
            <Switch>
                <Route path="/" exact component={RestaurantWrapper} />
                <Route
                    path="/restaurant/:id"
                    component={Menu}
                />

                <Route

                    path="/OrderDetails"
                    component={OrderDetails}
                />

                <Route

                    path="/OrderHistory"
                    component={OrderHistory}
                />



                <Route
                    path="/cart"
                    render={(props) => {
                        return isAuthenticated ? (
                            <Cart {...props} />
                        ) : (
                                <Redirect
                                    to={{ pathname: "/login", state: { from: props.location } }}
                                />
                            );
                    }}
                />
                } />

                <Route

                    path="/login"
                    component={Login}
                />

            </Switch>


        )
    }

}



const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);


