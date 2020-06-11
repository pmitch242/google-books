import React from 'react'

import AuthorBooksList from './AuthorBooksList';

function ProjectDetails() {
    return (
        <div className="project-details">
            <div className="project-details-nav">
                <span className="page-title">Description</span>
            </div>
            <div className="projest-details-content">
                <img
                    alt='Book Cover'
                    src='https://i.pinimg.com/originals/1e/c5/df/1ec5df963765d4bcf151467c99d1dae7.jpg'
                />
                <h2 className='book-title'>Journey</h2>
                <h4 className='author'>Renee Mitchell</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, placeat debitis exercitationem sit temporibus
                nam aliquam cumque, reprehenderit vel mollitia sequi qui
                voluptas maiores dolore modi soluta neque fugit tempora!
                </p>
                <button className='read-more'>Read More</button>
            </div>
            <div className="author-other-books">
                <span >Other Books by Author</span>
                <AuthorBooksList />
            </div>
        </div>
    )
}

export default ProjectDetails;
