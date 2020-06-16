const initState = {
    searchHistory: [
        {id: '1', search: '50 shades of grey'},
        {id: '2', search: 'so you want to talk about race'},
        {id: '3', search: 'between the world and me'},
        {id: '4', search: 'monopoly'},
        {id: '5', search: 'renee'},
    ]
}

const searchReducer = (state = initState, action) => {
    return state;
}

export default searchReducer;