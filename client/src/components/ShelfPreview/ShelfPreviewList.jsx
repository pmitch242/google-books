import React from 'react';

import ImageCard from '../cards/ImageCard';
import ViewMoreRoundBtn from './ViewMoreRoundBtn'

import './shelf-preview.css';

const ShelfPreviewList = () => {
    const style = {
        scrollDiv: {
            marginLeft: '-35px',
            paddingLeft: '35px',
            width: '105vw',
            alignItems: 'center',
        },
    }

    return (
        <div className='horizontal-scroll shelf-preview-list' style={style.scrollDiv}>
            <ImageCard
                title='Finding Moana'
                image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
            />

            <ImageCard
                title='Finding Moana'
                image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
            />

            <ImageCard
                title='Finding Moana'
                image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
            />

            <ImageCard
                title='Finding Moana'
                image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
            />

            <ImageCard
                title='Finding Moana'
                image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
            />

            <ViewMoreRoundBtn />

        </div>
    )
}

export default ShelfPreviewList;