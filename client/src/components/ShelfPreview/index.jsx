import React from 'react';

import './shelf-preview.css';

const ShelfPreview = () => {
    const style= {
        container: {},
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