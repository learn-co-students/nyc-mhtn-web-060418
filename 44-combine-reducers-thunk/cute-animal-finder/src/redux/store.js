import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk'

// event listener? tied to whatever calls it?
// disptached object has some user key to figure out the userReducer
const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
