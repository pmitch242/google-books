import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ViewMoreRoundBtn = () => {
    const style = {
        div: {
            paddingRight: '10px',
            marginLeft: '7px',
            color: '#1a4cb1a6',
        },
        span: {
            border: '3px solid',
            borderRadius: '50%',
            padding: '15px 20px',
            fontSize: '20px',
        }
    }

    return (
        <div className='round-button' style={style.div}>
            <span style={style.span}>
                <FontAwesomeIcon icon={faChevronRight} />
            </span>
        </div>
    )
}

export default ViewMoreRoundBtn;