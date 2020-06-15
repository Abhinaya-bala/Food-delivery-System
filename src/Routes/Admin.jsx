import React, { Component } from "react";
import { connect } from "react-redux";

import { admin } from "../Redux/action";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", foodItem: "", price: "" };
    }

    handleInput = (event, key) => {
        let obj = {};
        obj[key] = event.target.value;// only value has to update
        this.setState(obj);
    };
    handleAdmin = (event) => {
        console.log("am logging", this.props);
        event.preventDefault();
        this.props.admin(this.state);
        this.props.history.push("/"); // redirect
    };

    render() {
        return (
            <div className="col-6 mx-auto my-5">
                <form
                    onSubmit={(event) => {
                        this.handleAdmin(event);
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="restaurantname">Restaurant Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={(event) => this.handleInput(event, "name")}
                        />
                        <small className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="foodItem">Food Item</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.foodItem}
                            onChange={(event) => this.handleInput(event, "foodItem")}
                        />
                        <small className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.price}
                            onChange={(event) => this.handleInput(event, "price")}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add New Information
          </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    admin: (payload) => dispatch(admin(payload)), // to call action in the store
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
