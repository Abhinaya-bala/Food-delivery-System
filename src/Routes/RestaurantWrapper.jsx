import React, { Component } from "react";
import { connect } from "react-redux";

import RestaurantItem from "../Components/RestaurantItem";

class RestaurantWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantWrapper);
