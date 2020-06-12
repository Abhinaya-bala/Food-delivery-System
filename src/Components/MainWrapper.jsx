import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import RestaurantWrapper from "./RestaurantWrapper"
import Menu from "./Menu"
import OrderDetails from './OrderDetails';
import OrderHistory from './OrderHistory';
import Cart from './Cart';


class MainWrapper extends Component {
    constructor(props) {
        super(props)



    }



    render() {
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

                    path="/Cart"
                    component={Cart}
                />

            </Switch>


        )
    }

}

export default MainWrapper;