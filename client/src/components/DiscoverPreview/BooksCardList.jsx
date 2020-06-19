import React from 'react';

import DetailedCard from '../cards/DetailedCard';

const BooksCardList = ({ books }) => {
    return (
        <div id='books-card-list'>
            {books && books.map(book => {
                const bookInfo = book.volumeInfo
                bookInfo.id = book.id;
                return (
                    <DetailedCard book={bookInfo} key={book.id}/>
                )
            })}
        </div>
    )
}


export default BooksCardList;