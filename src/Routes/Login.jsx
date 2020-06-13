import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../Redux/action";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phoneNo: "", password: "" };
  }

  handleInput = (event, key) => {
    let obj = {};
    obj[key] = event.target.value;// only value has to update
    this.setState(obj);
  };
  handleLogin = (event) => {
    console.log("am logging", this.props);
    event.preventDefault();
    this.props.login(this.state);
    this.props.history.push("/cart"); // redirect
  };

  render() {
    return (
      <div className="col-6 mx-auto my-5">
        <form
          onSubmit={(event) => {
            this.handleLogin(event);
          }}
        >
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(event) => this.handleInput(event, "name")}
            />
            <small className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="phone">User Phone Number</label>
            <input
              type="number"
              className="form-control"
              value={this.state.phoneNo}
              onChange={(event) => this.handleInput(event, "phoneNo")}
            />
            <small className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => this.handleInput(event, "password")}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)), // to call action in the store
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
