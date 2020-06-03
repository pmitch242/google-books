import React from 'react';

const ImageCard = (props) => {
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
    }

    return (
        <div className='image-card' style={style.imgDiv}>
            <img
                alt={props.bookTitle}
                src={props.imageLink}
                style={style.img}
            />
        </div>
    )
}

export default ImageCard;