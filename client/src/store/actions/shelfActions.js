export const addBook = (book) =>{
    return(dispatch, getState) =>{
        // make async call to database
        dispatch({
            type: 'ADD_BOOK',
            book
        })
    }
}