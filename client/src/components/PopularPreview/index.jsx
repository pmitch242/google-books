import React from 'react';

import TitleWithRoute from '../TitleWithRoute';
import CategoryButtonList from './CategoryButtonList';

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
        </div>
    )
}

export default PopularPreview;