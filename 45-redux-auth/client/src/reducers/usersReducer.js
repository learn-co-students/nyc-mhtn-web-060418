const usersReducer = (state={ username: null }, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      console.log({...state, username: action.payload.username})
      return {...state, username: action.payload.username}
    default:
      return state
  }
}

export default usersReducer
