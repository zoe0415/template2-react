// export default (state = 3, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//     default:
//       return state
//   }
// }

// --------------------------
// const initialState = {
//   blogList: [
//     {
//       date: "2021-11-01",
//       img: "blog-chair.jpg",
//     },
//   ],
// }
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//     default:
//       return state
//   }
// }

// export default rootReducer

// --------------------------
const redux = require("redux")

// const createStore = redux.createStore
const combineReducer = redux.combineReducers

const LOGIN = "LOGIN"
const USER_DETAIL = "USER_DETAIL"
// action
// function loggedIn(user, pwd) {
//   return {
//     type: LOGIN,
//     username: user,
//     password: pwd,
//     loggedInStatus: "",
//   }
// }
// function updateUserName(FirstName, LastName, UserName) {
//   return {
//     type: USER_DETAIL,
//     FirstName: FirstName,
//     LastName: LastName,
//     UserName: UserName,
//   }
// }

function callLoginApi(username, password) {
  if (username === "admin" && password === "admin") {
    return "Login Success"
  } else {
    return "Invalid email and password"
  }
}

const initialLoginState = {
  username: "test",
  password: "test",
  loggedInStatus: "",
}

const initialUserState = {
  FirstName: "",
  LastName: "",
  UserName: "",
}

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.username,
        password: action.password,
        loggedInStatus: callLoginApi(action.username, action.password),
      }
    default:
      return state
  }
}

const UserReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_DETAIL:
      return {
        ...state,
        FirstName: action.FirstName,
        LastName: action.LastName,
        UserName: action.UserName,
      }
    default:
      return state
  }
}

const rootReducer = combineReducer({
  login: loginReducer,
  userDetail: UserReducer,
})

export default rootReducer
