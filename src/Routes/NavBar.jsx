import React, { Component } from 'react';

import { Link } from 'react-router-dom'



class NavBar extends Component {
    constructor(props) {
        super(props)


    }



    render() {
        return (


            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Food to Home</a>

                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item m-3 text-uppercase">
                            <Link to="/">
                                Restaurants
                </Link>
                        </li>

                        <li className="nav-item m-3 text-uppercase">
                            <Link to="/order">Orders

                </Link>
                        </li>

                        <li className="nav-item m-3 text-uppercase">
                            <Link to="/cart">Cart

                </Link>
                        </li>

                    </ul>

                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

            </nav>



        )
    }

}

export default NavBar;