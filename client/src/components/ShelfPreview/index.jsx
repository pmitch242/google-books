import React from 'react';

import TitleWithRoute from '../TitleWithRoute';
import ShelfPreviewList from './ShelfPreviewList';

import './shelf-preview.css';

const ShelfPreview = () => {
    return (
            <div style={{marginBottom: '20px'}} className='shelf-preview-div'>
                <TitleWithRoute title='Shelf' />

                <ShelfPreviewList />
            </div>
    )
}

export default ShelfPreview;