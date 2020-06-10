import React from 'react';
import Media from 'react-bootstrap/Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';

import ImageCard from './ImageCard';

import './cards.css';

const DetailedCard = (props) => {
    const style = {
        container: {
            backgroundColor: '#f3f5f9',
            borderRadius: '20px',
            padding: '10px',
            boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.12)',
        },
        h5: {
            fontFamily: `'Noto Serif', serif`,
            marginBottom: '0px',
        },
        h6: {
            color: '#4e4e4e',
        },
        p: {
            height: '60px',
            overflow: 'hidden',
            lineHeight: '20px',
            color: '#4e4e4e',
            marginBottom: '0px',
        },
        icon: {
            float: 'right',
            marginRight: '5px',
            fotSize: 'larger',
        },
    }

    return (
        <Media style={style.container} className='detailed-card'>

            <ImageCard
                title={props.title}
                image={props.image}
            />

            <Media.Body style={{ height: 'min-content', margin: 'auto' }}>
                <FontAwesomeIcon icon={heart} style={style.icon} />
                <h5 style={style.h5}>{props.title}</h5>
                <h6 style={style.h6}>{props.author}</h6>
                <p style={style.p}>
                    {props.description}
                </p>
            </Media.Body>
        </Media>
    )
}

export default DetailedCard;