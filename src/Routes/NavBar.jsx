import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRestaurents } from "../Redux/action";

import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  render() {
    const { searchRestaurents, cart } = this.props;
    return (
      <nav className="navbar navbar-light bg-light ">
        <div
          className="collapse navbar-collapse show flex"
          id="navbarSupportedContent"
        >
          <Link className="navbar-brand" to="/">
            <i className="fas fa-biking mx-2 text-danger"></i>
            <span className="text-primary">Food</span>2
            <span className="text-info">Home</span>
          </Link>

          <ul className="navbar-nav ml-auto flex flex-row">
            <li className="nav-item m-3 text-uppercase">
              <Link className="text-muted" to="/">
                Restaurants
              </Link>
            </li>

            <li className="nav-item m-3 text-uppercase">
              <Link className="text-muted" to="/OrderHistory">
                Orders
              </Link>
            </li>

            <li className="nav-item m-3 text-uppercase">
              <Link className="text-muted" to="/cart">
                Cart<span className="mx-2">({cart.length})</span>
              </Link>
            </li>
            <li className="nav-item m-3 text-uppercase">
              <Link className="text-muted" to="/login">
                Login
              </Link>
            </li>
          </ul>

          <form
            className="form-inline"
            onSubmit={(event) => {
              event.preventDefault();
              searchRestaurents(this.state.searchText);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchText}
              onChange={(event) => {
                this.setState({ searchText: event.target.value });
                searchRestaurents(event.target.value);
              }}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  searchRestaurents: (payload) => dispatch(searchRestaurents(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
