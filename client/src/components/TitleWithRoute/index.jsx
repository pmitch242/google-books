import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TitleWithRoute = (props) => {
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
        },
        h3: {
            marginBottom: '0px',
            fontFamily: `'Noto Serif', serif`,
        },
        viewAllDiv: {
            height: 'fit-content',
            marginTop: 'auto',
            color: '#de531e',
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
        <div style={style.container} className='title-with-route'>
            <h3 style={style.h3}>{props.title}</h3>

            <div style={style.viewAllDiv}>
                <span style={style.span}>View all</span>
                <FontAwesomeIcon icon={faChevronRight} style={style.icon} />
            </div>
        </div>
    )
}

export default TitleWithRoute;