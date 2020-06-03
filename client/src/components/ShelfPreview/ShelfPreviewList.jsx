import React from 'react';

import './shelf-preview.css';

const ShelfPreviewList = () => {
    const style = {
        img: {
            width: 'inherit',
            height: 'inherit',
            borderRadius: '20px',
        },
        imgDiv: {
            width: '125px',
            maxWidth: '400px',
            height: 'auto',
        },
        scrollDiv: {
            marginLeft: '-35px',
            paddingLeft: '35px',
            width: '100vw'
        }
    }

    return (
        <div className='horizontal-scroll' style={style.scrollDiv}>
            <div className='image-card' style={style.imgDiv}>
                <img
                    alt='book'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    style={style.img}
                />
            </div>

            <div className='image-card' style={style.imgDiv}>
                <img
                    alt='book'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    style={style.img}
                />
            </div>

            <div className='image-card' style={style.imgDiv}>
                <img
                    alt='book'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    style={style.img}
                />
            </div>

            <div className='image-card' style={style.imgDiv}>
                <img
                    alt='book'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    style={style.img}
                />
            </div>


            <div className='image-card' style={style.imgDiv}>
                <img
                    alt='book'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    style={style.img}
                />
            </div>


            <div className='image-card' style={style.imgDiv}>
                <img
                    alt='book'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    style={style.img}
                />
            </div>
        </div>
    )
}

export default ShelfPreviewList;