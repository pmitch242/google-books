import React, { useState } from 'react';
import Media from 'react-bootstrap/Media';
import { connect } from 'react-redux';

import { addBook, deleteBook } from '../../store/actions/shelfActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';

import ImageCard from './ImageCard';

import './cards.css';

const DetailedCard = ({ book, addBook, deleteBook }) => {
    const style = {
        container: {
            backgroundColor: '#f3f5f9',
            borderRadius: '20px',
            padding: '10px',
            boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.12)',
            marginBottom: '15px',
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

    // state to store save
    const [saved, setSaved] = useState(false)

    // function that toffles the save and unsave function
    const handleToggle = (id) => {
        saved ? handleUnsave(id) : handleSave(id);
    }

    // function that sets the save state to true and saves the book to the database
    const handleSave = (id) => {
        addBook(book);
        setSaved(true);
        
    }

    // function that sets the save state to false and deletes the book from the database
    const handleUnsave = (id) => {
        deleteBook(book);
        setSaved(false);
    }

    return (
        <Media style={style.container} className='detailed-card'>

            <ImageCard
                title={book.title}
                image={book.imageLinks.thumbnail}
            />

            <Media.Body style={{ height: 'min-content', margin: 'auto' }}>
                {saved ?
                    <FontAwesomeIcon onClick={() => handleToggle(book.id)} icon={heartSolid} style={style.icon} />
                    :
                    <FontAwesomeIcon onClick={() => handleToggle(book.id)} icon={heart} style={style.icon} />
                }
                <h5 style={style.h5}>{book.title}</h5>
                <h6 style={style.h6}>{book.author}</h6>
                <p style={style.p}>
                    {book.description}
                </p>
            </Media.Body>
        </Media>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(addBook(book)),
        deleteBook: (book) => dispatch(deleteBook(book))
    }
}

export default connect(null, mapDispatchToProps)(DetailedCard);