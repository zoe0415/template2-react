const userCartReducer = (
  state = [
    {
      id: "chair01",
      name: "Eames chair",
      img: "product-chair1.jpg",
      price: "300",
      discount: "200",
      num: 1,
    },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      var tempCartList = state.slice(0)
      var isEmpty = true
      if (tempCartList.length == 0) {
        tempCartList.push({
          id: action.id,
          name: action.name,
          img: action.img,
          price: action.price,
          discount: action.discount,
          num: 1,
        })
      } else {
        tempCartList.forEach((item) => {
          if (item.id === action.id) {
            isEmpty = false
            item.num++
          }
        })
        isEmpty
          ? tempCartList.push({
              id: action.id,
              name: action.name,
              img: action.img,
              price: action.price,
              discount: action.discount,
              num: 1,
            })
          : false
      }
      return tempCartList
    }
    case "DELETE_CART_ITEM": {
      return state.filter((item) => item.id !== action.id)
    }
    default:
      return state
  }
}

export default userCartReducer
