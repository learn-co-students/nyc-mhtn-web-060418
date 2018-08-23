import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

// reducer => takes something and makes it smaller
//    reduce function, that's why it's called that
const initialState = {
  picture: null,
  counter: 1,
  searchString: '',
  // how do we decide what goes in here?
  // does everything really go in here? even things that don't share concerns?
};

// get something, and return the "new" state
function reducer(state = initialState, action) {
  console.log('reducer is run', state, action);

  // { type: 'Cat', payload: 'meow' }
  // the type defines what type of action this is:
  // if (action === { type: 'Cat', payload: 'meow' })
  // Type is your classifier for your payload.
  if (action.type === 'Cat') {
    // store.getState()
    // state.picture = action.payload;
    // return state;

    // When we eventually connect to react <-- setState
    // it compared old state to new state, if it saw a change, it figured out what to render
    // redux will do the same thing, it will compare and figure out what you changed in state
    // if you use the same reference for the entire state object,
    // you want to use new objects, it doesn't have to do a deep compare to find out what changed
    // let newState = Object.assign({}, state);
    // newState.picture = action.payload;
    // return newState;

    // let newState = {...state};
    // newState.picture = action.payload;
    // return newState;

    return { ...state, picture: action.payload }
  }


  // all actions look like these:
  // { type: "@@redux/INITm.p.m.y.q" }
  // { type: "@@redux/INITm.p.m.y.q", payload: something }

  // do we need to define the initial state in index.js?
  // if (state === undefined) {
  //   return {};
  // }

  // what are we going to do in here?

  // do we need a special function?

  return state; // <== this is why it's undefined, got nothing, returned nothing
}

const store = createStore(reducer);

// undefined, null, empty object, sold out
// this is the default value = undefined
console.log('state inside of store', store.getState());

// what's the whole purpose of dispatch then???
// but our reducer doesn't do anything?
// so it doesn't change the store... yet.
let action = { category: 'Cat', type: 'Cat', payload: 'meow' };
store.dispatch(action);
// why is it called action? <--
// dispatch this action to the store
// you're sending someone on an errand to do some action at the store
// the action that you're doing has some sort of type
// your dispatch is now your setState

console.log('state inside of store', store.getState());

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
