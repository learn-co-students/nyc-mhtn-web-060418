import { SET_COUNTER } from './types';

const initialState = {
  picture: null,
  counter: 1,
  counterer: 1,
  searchString: '',
};

// currentState || prevState
// based on the action you dispatched
// reducer === Pure Functions
// returns something but doesn't make other things happen
// always gives back the same thing if you give it the same thing
export default function reducer(state = initialState, action) {
  console.log('reducer is run', state, action);

  switch(action.type) {
    case 'CAT':
      return { ...state, picture: action.payload }
    case 'DOG':
      return { ...state, picture: action.payload }
    case 'COW':
      return { ...state, picture: action.payload, counter: state.counter + 1 }
    case 'INCREMENT':
      console.log('INCREMENT');
      return { ...state, counter: state.counter + 1 }
    case 'INCREMENT_OTHER_COUNTER':
      console.log('INCREMENT_OTHER_COUNTER');
      return { ...state, counterer: state.counterer + 1 }
    case SET_COUNTER:
      return { ...state, counter: action.payload }
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
