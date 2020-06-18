import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import { connect } from 'react-redux';

class Search extends Component {
    render() {
        const { searchResults } = this.props;
        // console.log(searchResults);

        return(
            <div className='search'>
                <span>results</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.search.searchResults
    }
}

export default connect(mapStateToProps)(Search);
