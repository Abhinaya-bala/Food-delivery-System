import React, { Component } from "react";
import { connect } from "react-redux";

import { updateFilter } from "../Redux/action";

class Filter extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { updateFilter, filterByRating } = this.props;
        return (
            <div className="d-flex">
                <label className="mx-2 text-muted"> <i class="fas fa-star-half-alt text-success"></i> </label>
                <select className="custom-select" value={filterByRating} onChange={(event) => updateFilter({ filterByRating: event.target.value })}>
                    <option value="all">all</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                </select>
            </div >


        );
    }
}

const mapStateToProps = (state) => ({
    filterByRating: state.filterByRating
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (payload) => dispatch(updateFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
