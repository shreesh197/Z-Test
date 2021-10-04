import { createStore } from 'redux';

import rootReducer from './reducer';

export default createStore(
    rootReducer,
    // typeof window !== 'undefined' &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__()
);