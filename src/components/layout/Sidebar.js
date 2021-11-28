import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Sidebar() {
  const [menuList] = useState(useSelector((state) => state.menuList))
  const [isShowSubMenu, setIsShowSubMenu] = useState(
    Array(menuList.length).fill(false)
  )

  const ToggleSubMenu = (e, index) => {
    e.preventDefault()
    setIsShowSubMenu(
      isShowSubMenu.map((item, i) => {
        return i == index ? !isShowSubMenu[index] : false
      })
    )
  }

  return (
    <ul>
      {menuList.map((item, index) => (
        <li key={index}>
          <Link
            to={item.subMenu ? "#" : { pathname: item.link }}
            className={
              item.subMenu
                ? "flex pb-6 items-center justify-between hover:text-gray"
                : "block pb-6 hover:text-gray"
            }
            onClick={item.subMenu ? (e) => ToggleSubMenu(e, index) : null}
          >
            <span>{item.title}</span>
            {item.subMenu ? (
              <FontAwesomeIcon
                icon={isShowSubMenu[index] ? "chevron-up" : "chevron-down"}
              />
            ) : (
              false
            )}
          </Link>
          {item.subMenu ? (
            <ul
              className={
                isShowSubMenu[index]
                  ? "mb-2 max-h-80 overflow-hidden transition-all duration-1000"
                  : "max-h-0 overflow-hidden transition-all duration-700"
              }
            >
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    // to={`${item.link}/${subItem.link}`}
                    to={{
                      pathname: item.link,
                      search: `type=${subItem.link}`,
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
