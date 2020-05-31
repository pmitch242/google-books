import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ShelfPreviewList from './ShelfPreviewList';

import './shelf-preview.css';

const ShelfPreview = () => {
    const style = {
        container: {
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#f3f5f9',
            padding: '15px 20px',
            boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.12)',
        },
        h3: {
            marginBottom: '0px',
        },
        viewAllDiv: {
            height: 'fit-content',
            marginTop: 'auto',
        },
        span: {
            marginRight: '10px',
        },
        icon: {
            fontSize: 'x-small',
            marginBottom: '1px',
        }
    }

    return (
        <div style={style.container} className='shelf-preview-div'>
            <div className='title-link-div'>
                <h3 style={style.h3}>Shelf</h3>

                <div style={style.viewAllDiv}>
                    <span style={style.span}>View all</span>
                    <FontAwesomeIcon icon={faChevronRight} style={style.icon}/>
                </div>
            </div>

            <ShelfPreviewList />
        </div>
    )
}

export default ShelfPreview;