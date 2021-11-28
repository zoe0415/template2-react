import { combineReducers } from "redux"
import product from "./product"
import userCart from "./userCart"
import menuList from "./menuList"
import card1 from "./card1"
import card2 from "./card2"
import card3 from "./card3"
import blog from "./blog"
import darkMode from "./darkMode"

export default combineReducers({
  product,
  userCart,
  menuList,
  card1,
  card2,
  card3,
  blog,
  darkMode,
})
