import React from 'react';

import DetailedCard from '../cards/DetailedCard';

const BooksCardList = () => {
    return (
        <div id='books-card-list'>
            < DetailedCard
                title='Finding Moana'
                image='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                author='James Halemanu'
                description='Indigo can travel through time – he just doesn’t know it yet.
                Indigo is a 16-year-old orphan in present-day Hawaii –dying of leukemia 
                and a broken spirit. He has accepted that he will die, and is somewhat relieved to finally be free of the constant pain and loneliness.'
            />
        </div>
    )
}

export default BooksCardList;