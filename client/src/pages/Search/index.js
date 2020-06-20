import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';

import BookCardList from '../../components/DiscoverPreview/BooksCardList';

class Search extends Component {
    render() {
        const { searchData } = this.props;
        console.log(searchData);

        return (
            <div className='search'>
                {searchData.loading ? (
                    <h1>Loading</h1>
                ) : (
                        searchData.error ? (
                            <h2>{searchData.error}</h2>
                        ) : (
                                <BookCardList books={searchData.books} />
                            )
)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchData: state.search
    }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps)(Search);
