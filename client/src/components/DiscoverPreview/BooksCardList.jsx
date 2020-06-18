import React from 'react';

import DetailedCard from '../cards/DetailedCard';

const BooksCardList = ({ books }) => {
    return (
        <div id='books-card-list'>
            {books && books.map(book => {
                const bookInfo = book.volumeInfo
                return (
                    <DetailedCard book={bookInfo} key={book.id} />
                )
            })}
        </div>
    )
}


export default BooksCardList;