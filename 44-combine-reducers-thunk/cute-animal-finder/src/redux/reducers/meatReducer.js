import { UPDATE_ANIMAL, RESET } from '../types';

const initialMeatState = {
  animalSrc: null,
  isFetching: false,
};

function meatReducer(state = initialMeatState, action) {
  console.log('%c meatReducer', 'color:violet', state, action);

  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    case RESET:
      return initialMeatState;
    case 'FETCHING_DOG':
      return { ...state, isFetching: true }
    case 'FETCHED_DOG':
      return { ...state, isFetching: false }
    default:
      return state;
  }
}

export default meatReducer;
