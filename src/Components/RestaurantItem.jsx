import React, { Component } from "react";

import { Link } from "react-router-dom";

class RestaurantItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div className="card">
        <img src={restaurant.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.cuisine.join(", ")}</p>
          <div className="card-list flex">
            <ul className="flex p-0">
              <li className="li">Upto {restaurant.deliveryTime} MINS</li>
              <li className="li">RS.{restaurant.costForTwo} FOR TWO</li>
              <li className="li">MinOrder {restaurant.minOrder}</li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <p className="badge rating-wrapper">{restaurant.rating}</p>

          <Link
            to={`/restaurant/${restaurant.id}`}
            className="btn btn-style btn-wrapper"
          >
            Order Online
          </Link>
        </div>
      </div>
    );
  }
}

export default RestaurantItem;
