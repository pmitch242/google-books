const initState = {
    shelf: []
}

const shelfReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            console.log('saved book', action.book);
            return state;
        case 'DELETE_BOOK':
            console.log('deleted book', action.book);
            return state;
        default: return state
    }
}

export default shelfReducer;