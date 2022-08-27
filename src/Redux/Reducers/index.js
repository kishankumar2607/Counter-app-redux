import {combineReducers} from 'redux';

//
import CounterReducer from './Counter/counterReducer';
import UserReducer from './User/userReducer';

const rootReducer = combineReducers({
  counter: CounterReducer,
  user: UserReducer,
});

export default rootReducer;

// const rootReducer = {
//   counter: {
//     count: 0,
//     length: 10,
//     maxCount: 100,
//   },
//   user: {
//     uid: '',
//     userName: '',
//     isUserLogin: false,
//     hobby: [],
//     moreData: {
//       city: '',
//     },
//   },
// };

// rootReducer.counter.count

// const data = {
//   counter: {count: 0, length: 10, maxCount: 100},
//   user: {
//     hobby: [],
//     isUserLogin: false,
//     moreData: {city: ''},
//     uid: '',
//     userName: '',
//   },
// };
