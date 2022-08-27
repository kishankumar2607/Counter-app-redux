import {createStore} from 'redux';

// import root reducers
import rootReducer from './Reducers/index';

const store = createStore(rootReducer);

export {store};
