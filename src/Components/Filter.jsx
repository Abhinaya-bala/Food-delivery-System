import React, { Component } from "react";
import { connect } from "react-redux";

import { updateFilter } from "../Redux/action";

class Filter extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { updateFilter, sortByRating } = this.props;
        return (
            <div className="d-flex">
                <label className="mx-2 text-muted"> Rating:</label>
                <select className="custom-select" value={sortByRating} onChange={(event) => updateFilter(event.target.value)}>
                    <option value="dsc">high to low</option>
                    <option value="asc">Low to high</option>
                </select>
            </div >


        );
    }
}

const mapStateToProps = (state) => ({
    sortByRating: state.sortByRating
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (payload) => dispatch(updateFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
