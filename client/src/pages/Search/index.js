import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';

import BookCardList from '../../components/DiscoverPreview/BooksCardList';

class Search extends Component {
    render() {
        const { searchResults } = this.props;
        console.log(searchResults);

        return (
            <div className='search'>
                <BookCardList books={ searchResults }/>
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
