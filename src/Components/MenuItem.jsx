import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class MenuItem extends Component {
    constructor(props) {
        super(props)


    }



    render() {
        const { item } = this.props
        return (
            <div >

                {item.name}
            </div>

        )
    }

}

export default MenuItem;