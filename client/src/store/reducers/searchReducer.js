const initState = {
    searches: [
        { id: '1', search: '50 shades of grey' },
        { id: '2', search: 'so you want to talk about race' },
        { id: '3', search: 'between the world and me' },
        { id: '4', search: 'monopoly' },
        { id: '5', search: 'renee' },
    ],
    books: [],
    loading: false,
    error: ''
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_REQUEST':
            console.log('LOADING...')
            return {
                ...state,
                loading: true,
                searches: [...state.searches,
                action.search]
            }
        case 'FETCH_SEARCH_SUCCESS':
            console.log('SUCCESSFUL!!!')
            return {
                ...state,
                error: '',
                books: action.books,
                loading: false,
            }
        case 'FETCH_SEARCH_FAILED':
            console.log('FAILED.')
            return {
                ...state,
                books: [],
                error: action.error,
                loading: false,
            }
            default: return state
    }
}

export default searchReducer;