import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Sidebar() {
  // const [isShowSubMenu] = useState({ subMenu: 0, isShow: false })
  const [menuList] = useState([
    {
      link: "#",
      title: "Categories",
      subMenu: [
        { link: "#", title: "Accesories" },
        { link: "#", title: "Chairs" },
        { link: "#", title: "Lamps" },
        { link: "#", title: "Pots & Cups" },
        { link: "#", title: "Vases" },
        { link: "#", title: "Tables" },
        { link: "#", title: "All" },
      ],
    },
    {
      link: "#",
      title: "Blog",
    },
    {
      link: "#",
      title: "Contact",
    },
  ])
  const [isShowSubMenu] = useState(Array(menuList.length).fill(false))
  const ToggleSubMenu = (e, index) => {
    e.preventDefault()
    isShowSubMenu.subMenu = index
    isShowSubMenu.isShow = !isShowSubMenu.isShow
    console.log(isShowSubMenu)
  }
  return (
    <ul>
      {menuList.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            className={item.subMenu ? "relative block pb-6" : "block pb-6"}
            onClick={(e) => ToggleSubMenu(e, index)}
          >
            {item.title}
            {item.subMenu ? (
              <FontAwesomeIcon
                icon="chevron-down"
                className="absolute top-1 right-8 cursor-pointer"
              />
            ) : (
              false
            )}
          </a>
          {item.subMenu ? (
            <ul
              className={
                isShowSubMenu.subMenu == index && isShowSubMenu.isShow == true
                  ? "mb-2"
                  : "mb-6"
              }
            >
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a href={subItem.link} className="block pb-6 px-4 hover:text-gray">
                    {subItem.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            false
          )}
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
