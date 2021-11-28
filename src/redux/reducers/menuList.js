const initialState = [
  {
    link: "/shop",
    title: "Categories",
    subMenu: [
      { link: "accessory", title: "Accesories" },
      { link: "chair", title: "Chairs" },
      { link: "lamp", title: "Lamps" },
      { link: "potsCup", title: "Pots & Cups" },
      { link: "vase", title: "Vases" },
      { link: "table", title: "Tables" },
      { link: "all", title: "All" },
    ],
  },
  {
    link: "/blog",
    title: "Blog",
    subMenu: [
      { link: "Chair", title: "Chairs" },
      { link: "Indoor", title: "Indoors" },
      { link: "Minimalism", title: "Minimalism" },
      { link: "All", title: "All" },
    ],
  },
  {
    link: "/contact",
    title: "Contact",
  },
]

const MenuListReducer = (state = initialState) => {
  return state
}

export default MenuListReducer
