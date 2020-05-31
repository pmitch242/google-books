import React from 'react';

import './shelf-preview.css';

const ShelfPreview = () => {
    const style = {
        container: {
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#f3f5f9',
            padding: '15px 20px',
            boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.12)',
        },

    }

    return (
        <div style={style.container} className='shelf-preview-div'>
            <div className='title-link-div'>
                <h2>Shelf</h2>
                <span>View all</span>
            </div>
        </div>
    )
}

export default ShelfPreview;