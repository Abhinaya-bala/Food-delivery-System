import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from '../Components/Filter'
import RestaurantItem from "../Components/RestaurantItem";

class RestaurantWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurants, searchText, filterByRating } = this.props;
    console.log(filterByRating)
    return (
      <div>
        <div className="col-1 text-right mt-2"><Filter /></div>
        <div className="flex flex-wrap">
          {restaurants
            .filter(
              (restaurant) =>
                restaurant.name.toLowerCase().indexOf(searchText) > -1
            ).filter((restaurant) => {
              if (filterByRating === "all") {
                return true
              }
              return restaurant.rating >= filterByRating

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
  filterByRating: state.filterByRating
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantWrapper);
