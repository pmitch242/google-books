import React from 'react';
import Media from 'react-bootstrap/Media';

import ImageCard from './ImageCard';

import './cards.css';

const DetailedCard = (props) => {
    const style = {
        container: {},
        h5: {
            fontFamily: `'Noto Serif', serif`,
            marginBottom: '0px',
        },
        h6: {},
        p: {
            height: '60px',
            overflow: 'hidden',
            lineHeight: '20px',
        },
    }

    return (
        <Media className='detailed-card'>
            <ImageCard
                title={props.title}
                image={props.image}
            />

            <Media.Body>
                <h5 style={style.h5}>{props.title}</h5>
                <h6>{props.author}</h6>
                <p style={style.p}>
                    {props.description}
                </p>
            </Media.Body>
        </Media>
    )
}

export default DetailedCard;