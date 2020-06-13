import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from '../Components/Filter'
import RestaurantItem from "../Components/RestaurantItem";

class RestaurantWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurants, searchText, sortByRating } = this.props;
    return (
      <div>
        <div className="col-3 mt-2"><Filter /></div>
        <div className="flex flex-wrap">
          {restaurants
            .filter(
              (restaurant) =>
                restaurant.name.toLowerCase().indexOf(searchText) > -1
            ).sort((restaurant1, restaurant2) => {
              if (sortByRating === "asc") {
                return restaurant1.rating - restaurant2.rating
              }
              return restaurant2.rating - restaurant1.rating
            })
            .map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  searchText: state.searchText,
  sortByRating: state.sortByRating
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantWrapper);
