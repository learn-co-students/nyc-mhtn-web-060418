import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from '../apis/AnimalAdapter';

export function addUserAction(name, email) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email }
  }
}

export function updateAnimalAction(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

// 21, 34, 25, 29
export function fetchDogAction() {
  console.log('Enter fetchDogAction');
  AnimalAdapter.getDog()
    .then(url => {
      // dispatch(updateAnimalAction(url))
      console.log('inside getDog', url);
      return url
    })
    .then(() => {
      console.log('inside of getDog return');
      return {
        type: 'FETCHED_DOGS'
      }
    })
  console.log('Exit fetchDogAction');
}

// thunk is a middleware that will intercept your disptached actions
// and if it's a function, it will run that function giving it dispatch as
// its first argument.
export function thunkedFetchDogAction() {
  // return { type }
  return (dispatch) => {
    console.log('thunkedFetchDogAction', dispatch);
    dispatch({ type: 'FETCHING_DOG'});

    AnimalAdapter.getDog()
      .then(url => {
        dispatch(updateAnimalAction(url))
        dispatch({ type: 'FETCHED_DOG' })
      })
  }
}
