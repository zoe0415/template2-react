import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "../layout/Sidebar"
import SidebarProduct from "../layout/SidebarProduct"

function RightDrawer(props) {
  const [isShowSideBarProduct, setIsShowSideBarProduct] = useState(true)
  const hash = useLocation()

  useEffect(() => {
    setIsShowSideBarProduct(hash.pathname.includes("shop"))
  }, [hash, isShowSideBarProduct])

  return (
    <section
      className={
        props.isShowMenu
          ? "fixed right-0 w-3/5 md:w-1/4 h-full pt-8 pr-8 pl-4 bg-gray-light2 shadow-2xl z-30 overflow-y-auto duration-700 scroll-bar"
          : "fixed -right-full w-3/5 md:w-1/4 h-full pt-8 pr-8 pl-4 bg-gray-light2 shadow-2xl z-30 overflow-y-auto duration-1000 scroll-bar"
      }
    >
      <div className="flex items-center justify-between mb-12">
        <div>
          <Link
            to="/register"
            className="inline-block mr-4 pt-1 px-2.5 pb-1.5 bg-black rounded-2xl  text-white text-sm hover:bg-gray duration-300"
          >
            Register
          </Link>
          <Link to="/login" className="inline-block hover:text-gray duration-300">
            <FontAwesomeIcon icon="sign-in-alt" size="lg" />
          </Link>
        </div>
        <FontAwesomeIcon
          icon="times"
          className="text-xl cursor-pointer hover:text-gray"
          onClick={() => props.setIsShowMenu(false)}
        />
      </div>
      {isShowSideBarProduct ? (
        <SidebarProduct></SidebarProduct>
      ) : (
        <Sidebar></Sidebar>
      )}
    </section>
  )
}

export default RightDrawer
