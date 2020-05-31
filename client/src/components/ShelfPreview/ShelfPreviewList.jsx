import React from 'react';

const ShelfPreviewList = () => {
    const style = {
        img: {},
        imgDiv: {},
        img: {},

    }

    return (
        <div className='horizontal-scroll'>
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