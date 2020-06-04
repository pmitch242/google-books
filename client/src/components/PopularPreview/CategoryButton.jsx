import React from 'react';

const CategoryButton = (props) => {
    const style = {
        container: {
            padding: '2px 20px',
            borderRadius: '20px',
            color: '#1a4cb1',
            fontWeight: 'bolder',
            letterSpacing: '1px',
            backgroundColor: '#34afff29',
            marginRight: '10px',
        }
    }

    return (
        <div style={style.container} id='category-button'>
            <span className='nowrap'>{props.name}</span>
        </div>
    )
}

export default CategoryButton;