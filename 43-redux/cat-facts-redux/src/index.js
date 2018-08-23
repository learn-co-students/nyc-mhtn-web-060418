import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

const initialState = {
  picture: null,
  counter: 1,
  searchString: '',
};

// currentState || prevState
// based on the action you dispatched
// reducer === Pure Functions
// returns something but doesn't make other things happen
// always gives back the same thing if you give it the same thing
function reducer(state = initialState, action) {
  console.log('reducer is run', state, action);

  switch(action.type) {
    case 'CAT':
      return { ...state, picture: action.payload }
    case 'DOG':
      return { ...state, picture: action.payload }
    case 'COW':
      return { ...state, picture: action.payload, counter: state.counter + 1 }
    default:
      return state;
  }

  // if (action.type === 'Cat') {
  //   return { ...state, picture: action.payload }
  // }
  // if (action.type === 'Dog') {
  //   return { ...state, picture: action.payload }
  // }
  // if (action.type === 'Cow') {
  //   return { ...state, picture: action.payload }
  // }
  //
  // return state;
}

const store = createStore(reducer);

// API_URL
// ENVIRONMENT

console.log('state inside of store', store.getState());

let action = { category: 'CAT', type: 'CAT', payload: 'meow' };
store.dispatch(action);
console.log('state inside of store', store.getState());

let action2 = { type: 'DOG', payload: 'bark' };
store.dispatch(action2);
console.log('state inside of store', store.getState());

let action3 = { type: 'COW', payload: 'moo' };
store.dispatch(action3);
console.log('state inside of store', store.getState());


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
