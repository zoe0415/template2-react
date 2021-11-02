import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Sidebar() {
  // const [isShowSubMenu] = useState({ subMenu: 0, isShow: false })
  const [menuList] = useState([
    {
      link: "/categories",
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
  ])
  const [isShowSubMenu] = useState(Array(menuList.length).fill(false))
  // const ToggleSubMenu = (e, index) => {
  //   e.preventDefault()
  //   isShowSubMenu.subMenu = index
  //   isShowSubMenu.isShow = !isShowSubMenu.isShow
  //   console.log(isShowSubMenu)
  // }

  return (
    <ul>
      {menuList.map((item, index) => (
        <li key={index}>
          <Link
            to={{
              pathname: item.link,
            }}
            className={item.subMenu ? "relative block pb-6" : "block pb-6"}
            // onClick={(e) => ToggleSubMenu(e, index)}
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
          </Link>
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
                  <Link
                    // to={`${item.link}/${subItem.link}`}
                    to={{
                      pathname: item.link,
                      search: `?type=${subItem.link}`,
                    }}
                    className="block pb-6 px-4 hover:text-gray"
                  >
                    {subItem.title}
                  </Link>
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
