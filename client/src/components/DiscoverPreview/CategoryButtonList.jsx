import React from 'react';

import CategoryButton from './CategoryButton';

const CategoryButtonList = () => {
    const style = {
        container: {
            marginLeft: '-15px',
            marginBottom: '15px',
            paddingLeft: '15px',
            width: '100vw'
        }
    }

    return (
        <div
            style={style.container}
            id='category-button-list'
            className='horizontal-scroll'
        >
            <CategoryButton name='All' />
            <CategoryButton name='Fantasy' />
            <CategoryButton name='Mystery' />
            <CategoryButton name='Romance' />
            <CategoryButton name='Science Fiction' />
            <CategoryButton name='Horror' />
            <CategoryButton name='Thriller' />
            <CategoryButton name='Magical Realism' />

            <div className='more-categories'>
                <CategoryButton name='...' />
            </div>

        </div>
    )
}

export default CategoryButtonList;