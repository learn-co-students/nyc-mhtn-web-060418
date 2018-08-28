import { ADD_USER, RESET } from '../types';

const initialUserState = {
  users: [],
};

// state = {}

function userReducer(state = initialUserState, action) {
  console.log('%c userReducer', 'color:blue', state, action);

  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case RESET:
      return initialUserState;
    default:
      return state;
  }
}

export default userReducer;
