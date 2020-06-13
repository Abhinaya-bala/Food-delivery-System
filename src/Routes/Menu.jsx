import React, { Component } from "react";

import { connect } from "react-redux";
import MenuItem from "../Components/MenuItem";

class Menu extends Component {
  constructor(props) {
    super(props);

    const restaurantId = Number(props.match.params.id); // taken from url
    const restaurant = props.restaurants.find(
      (element) => element.id === restaurantId
    ); //This line makes sure that products are only displayed if they are found!
    console.log("restaurant :", restaurant);
    this.state = { restaurant: restaurant };
  }

  render() {
    return (
      <div className="mx-5 my-5">
        <ul class="list-group">
          {this.state.restaurant.menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
