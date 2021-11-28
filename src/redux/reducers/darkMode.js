const initialState = false

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_DARK_MODE": {
      console.log(action.isDarkMode)
      return (state = action.isDarkMode)
    }
    default:
      return state
  }
}

export default darkModeReducer
