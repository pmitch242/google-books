import React from 'react';

import TitleWithRoute from '../TitleWithRoute';
import ShelfPreviewList from './ShelfPreviewList';

import './shelf-preview.css';

const ShelfPreview = () => {
    const style = {
        container: {
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#f3f5f9',
            padding: '20px',
            boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.12)',
        },
    }

    return (
        // <div className='background-div'>
            <div style={style.container} className='shelf-preview-div'>
                <TitleWithRoute 
                    title='Shelf'
                />
                
                <ShelfPreviewList />
            </div>
        // </div>
    )
}

export default ShelfPreview;