import API from '../../utils/API';

export const fetchSearchRequest = search =>{
    return {
        type: 'FETCH_SEARCH_REQUEST',
        search
    }
}

export const fetchSearchSuccess = books =>{
    return {
        type: 'FETCH_SEARCH_SUCCESS',
        books
    }
}

export const fetchSearchFailed = error =>{
    return {
        type: 'FETCH_SEARCH_FAILED',
        error
    }
}

export const fetchBooks = search => {
    return(dispatch, getState) => {
        // dispatch 
        dispatch(fetchSearchRequest(search))
        
        // get books from google's api
        API.google(search)
        .then(res => {
            const books = res.data.items;
            dispatch(fetchSearchSuccess(books))
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchSearchFailed(errorMsg))
        })

    }
}