const usersReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      localStorage.setItem('jwt', action.payload.jwt)
      const { user } = action.payload
      return { ...state, user }
    default:
      return state
  }
}

export default usersReducer
