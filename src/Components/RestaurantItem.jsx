import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class RestaurantItem extends Component {
    constructor(props) {
        super(props)


    }



    render() {
        const { restaurant } = this.props
        return (
            <div >

                <div className="card">
                    <div className="card-body">
                        <div className="image-wrapper">
                            <img
                                className="avatar"
                                src={restaurant.src}
                                alt=""
                            />
                        </div>

                        <div className="content-wrapper">

                            <h1 className="card-title">{restaurant.name}</h1>
                            <p className="card-description">
                                {restaurant.cuisine.join(", ")}
                            </p>


                            <div className="card-list flex">
                                <ul className="flex">
                                    <li className="li">Upto {restaurant.deliveryTime} MINS</li>
                                    <li className="li">RS.{restaurant.costForTwo} FOR TWO</li>
                                    <li className="li">MinOrder {restaurant.minOrder}</li>
                                </ul>




                            </div>


                            {/* <p className="card-para">
                            <ul>
                                <p>{restaurant.votes} votes</li>
                                <li>{restaurant.reviews} reviews</li>
                            </ul>

                        </p> */}


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

            </div>

        )
    }

}

export default RestaurantItem;