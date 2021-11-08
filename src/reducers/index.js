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

const initialMenuList = [
  {
    link: "/shop",
    title: "Categories",
    subMenu: [
      { link: "accesories", title: "Accesories" },
      { link: "chairs", title: "Chairs" },
      { link: "lamps", title: "Lamps" },
      { link: "potsCups", title: "Pots & Cups" },
      { link: "vases", title: "Vases" },
      { link: "tables", title: "Tables" },
      { link: "all", title: "All" },
    ],
  },
  {
    link: "/blog",
    title: "Blog",
    subMenu: [
      { link: "chairs", title: "Chairs" },
      { link: "indoors", title: "Indoors" },
      { link: "minimalism", title: "Minimalism" },
      { link: "all", title: "All" },
    ],
  },
  {
    link: "/contact",
    title: "Contact",
  },
]

const initialCard1State = [
  {
    title: "111",
    img: "card1-1.jpeg",
  },
  {
    title: "222",
    img: "card1-1.jpeg",
  },
  {
    title: "333",
    img: "card1-1.jpeg",
  },
  {
    title: "444",
    img: "card1-1.jpeg",
  },
]

const initialCard2State = [
  {
    title: "Lights Adventures",
    bgColor: "#F8931F",
    num: "01",
  },
  {
    title: "Everyone Loves Technology",
    bgColor: "#AE9962",
    num: "02",
  },
  {
    title: "Future of Luxury",
    bgColor: "#111111",
    num: "03",
  },
  {
    title: "The Modern Rules Of Minimalism",
    bgColor: "#909090",
    num: "04",
  },
  {
    title: "The Modern Rules Of Minimalism",
    bgColor: "#909090",
    num: "04",
  },
]

const initialCard3State = [
  {
    title: "Lamps",
    img: "card3-lamps.jpg",
  },
  {
    title: "Chairs",
    img: "card3-chairs.jpg",
  },
  {
    title: "Cups",
    img: "card3-cups.jpg",
  },
  {
    title: "Vases",
    img: "card3-vases.jpg",
  },
  {
    title: "Lamps11",
    img: "card3-lamps.jpg",
  },
  {
    title: "Lamps22",
    img: "card3-lamps.jpg",
  },
]

const initialProductState = [
  {
    name: "Eames chair",
    img: "product-chair1.jpg",
    price: "300",
    discount: "200",
  },
  {
    name: "Eames chair2",
    img: "product-chair1.jpg",
    price: "500",
  },
  {
    name: "Eames chair3",
    img: "product-chair1.jpg",
    price: "400",
  },
  {
    name: "Eames chair4",
    img: "product-chair1.jpg",
    price: "600",
    discount: "400",
  },
]

const initialBlogState = [
  {
    title: "title",
    date: "2021-11-01",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Design", "Living"],
  },
  {
    title: "title2",
    date: "2021-11-02",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Design", "Living"],
  },
  {
    title: "title3",
    date: "2021-11-03",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Design", "Living"],
  },
  {
    title: "title4",
    date: "2021-11-04",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Design", "Living"],
  },
  {
    title: "title5",
    date: "2021-11-05",
    describe:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Similique quia inventore ipsa aperiam rem illum maxime magni dolorum obcaecati iste, ab saepe cumque ad nihil quos mollitia, quibusdam sed illo.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Design", "Living"],
  },
]

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

const MenuListReducer = (state = initialMenuList) => {
  return state
}

const Card1Reducer = (state = initialCard1State, action) => {
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

const Card2Reducer = (state = initialCard2State, action) => {
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

const Card3Reducer = (state = initialCard3State, action) => {
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

const ProductReducer = (state = initialProductState, action) => {
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

const BlogReducer = (state = initialBlogState, action) => {
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
  menuList: MenuListReducer,
  card1: Card1Reducer,
  card2: Card2Reducer,
  card3: Card3Reducer,
  productDate: ProductReducer,
  blogDate: BlogReducer,
})

export default rootReducer
