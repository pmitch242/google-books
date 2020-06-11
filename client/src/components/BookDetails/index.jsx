import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import ImageCard from '../cards/ImageCard';
import AuthorBooksList from './AuthorBooksList';

import './book-details.css';

const bookDetails = (props) => {
    // get id from react router
    const id = props.match.params.id;

    const style = {
        container: {
            marginTop: '15px',
            display: 'flex',
            flexFlow: 'column'
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            marginTop: '20px',
            marginBottom: '15px',
            padding: '0 15px',
            fontSize: '1.2rem',
            fontFamily: `'Noto Serif', serif`,
        },
        contentContainer: {
            textAlign: 'center',
        },
        h2: {},
        h4: {},
        p: {},
        button: {},

    }

    return (
        <div style={style.container} className="book-details">
            <div style={style.nav} className="book-details-nav">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="page-title">Description</span>
                <FontAwesomeIcon icon={heart} />
            </div>
                <div style={style.contentContainer} className="book-details-content">
                    <ImageCard
                        image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                    />
                    <h5 className='book-title'>Journey</h5>
                    <h6 className='author'>Renee Mitchell</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, placeat debitis exercitationem sit temporibus
                    nam aliquam cumque, reprehenderit vel mollitia sequi qui
                    voluptas maiores dolore modi soluta neque fugit tempora!
                </p>
                    {/* <button className='read-more'>Read More</button> */}
                </div>
                <div className="author-other-books">
                    <span >Other Books By This Author</span>
                    <AuthorBooksList />
                </div>
        </div>
    )
}

export default bookDetails;
