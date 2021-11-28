export const AddCartIem = ({ id, name, img, price, discount }) => ({
  type: "ADD_CART_ITEM",
  id,
  name,
  img,
  price,
  discount,
})
export const DeleteCartIem = (id) => ({
  type: "DELETE_CART_ITEM",
  id,
})
export const HandleDarkMode = (isDarkMode) => ({
  type: "HANDLE_DARK_MODE",
  isDarkMode,
})
