import React, { Component } from 'react';



class NavBar extends Component {
    constructor(props) {
        super(props)


    }



    render() {
        return (


            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Navbar</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>



        )
    }

}

export default NavBar;