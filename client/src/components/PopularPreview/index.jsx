import React from 'react';

import TitleWithRoute from '../TitleWithRoute';
import CategoryButtonList from './CategoryButtonList';
import BookCardList from './BooksCardList';

import './popular-preview.css';

const PopularPreview = () => {
    const style = {
        container: {
            marginBottom: '20px',
        }
    }

    return (
        <div id='popular-preview-div'>
            <TitleWithRoute title='Discover' />

            <CategoryButtonList />

            <BookCardList />
        </div>
    )
}

export default PopularPreview;