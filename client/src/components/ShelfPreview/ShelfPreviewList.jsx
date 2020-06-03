import React from 'react';

import ImageCard from '../cards/ImageCard';

import './shelf-preview.css';

const ShelfPreviewList = () => {
    const style = {
        scrollDiv: {
            marginLeft: '-35px',
            paddingLeft: '35px',
            width: '100vw'
        }
    }

    return (
        <div className='horizontal-scroll' style={style.scrollDiv}>
            <ImageCard
            bookTitle='Finding Moana'
            imageLink='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg' />
        </div>
    )
}

export default ShelfPreviewList;