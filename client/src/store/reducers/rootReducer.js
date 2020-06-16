import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import shelfReducer from './shelfReducer';
import discoverReducer from './discoverReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    shelf: shelfReducer,
    discover: discoverReducer,
})

export default rootReducer;