import React from 'react';

const ImageCard = (props) => {
    const style = {
        img: {
            width: 'inherit',
            height: 'inherit',
            borderRadius: '20px',
        },
        imgDiv: {
            height: 'auto',
        },
    }

    return (
        <div className='image-card' style={style.imgDiv}>
            <img
                alt={props.title}
                src={props.image}
                style={style.img}
            />
        </div>
    )
}

export default ImageCard;