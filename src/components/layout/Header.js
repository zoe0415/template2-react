import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HandleDarkMode } from "../../redux/actions"
import TopDrawer from "../drawer/TopDrawer"
import LeftDrawer from "../drawer/LeftDrawer"
import RightDrawer from "../drawer/RightDrawer"

function Header() {
  const dispatch = useDispatch()
  const userCart = useSelector((state) => state.userCart)
  const isDark = useSelector((state) => state.darkMode)
  const [userCartItemNum, setUserCartItemNum] = useState(0)
  const [isShowLeftMenu, setIsShowLeftMenu] = useState(false)
  const [isShowTopMenu, setIsShowTopMenu] = useState(false)
  const [isShowRightMenu, setIsShowRightMenu] = useState(false)
  // method
  const leftMenuDisplay = (e) => {
    e.preventDefault()
    setIsShowLeftMenu(true)
  }
  const topMenuDisplay = (e) => {
    e.preventDefault()
    setIsShowTopMenu(true)
  }
  const rightMenuDisplay = (e) => {
    e.preventDefault()
    setIsShowRightMenu(true)
  }
  const HandleChangeDarkMode = () => {
    let tempBoolean = Boolean(isDark)
    dispatch(HandleDarkMode(!tempBoolean))
  }

  useEffect(() => {
    let tempNum = 0
    userCart.forEach((el) => {
      tempNum += Number(el.num)
    })
    setUserCartItemNum(tempNum)
  }, [userCart])

  return (
    <section>
      <LeftDrawer
        isShowMenu={isShowLeftMenu}
        setIsShowMenu={setIsShowLeftMenu}
      ></LeftDrawer>
      <TopDrawer
        isShowMenu={isShowTopMenu}
        setIsShowMenu={setIsShowTopMenu}
      ></TopDrawer>
      <RightDrawer
        isShowMenu={isShowRightMenu}
        setIsShowMenu={setIsShowRightMenu}
      ></RightDrawer>

      <header className="fixed left-0 w-full py-4 px-8 md:p-8 flex items-center justify-between bg-white dark:bg-black-light dark:text-white z-20">
        <div className="flex items-center">
          <a href="">
            <img
              className="h-20 block md:hidden dark:hidden"
              src={`${process.env.PUBLIC_URL}/images/woolf-logo-sm.svg`}
            ></img>

            <img
              src={`${process.env.PUBLIC_URL}/images/woolf-logo-sm-dark.svg`}
              className="h-20 hidden dark:block md:dark:hidden"
            ></img>
          </a>
          <a
            href="#"
            className="mx-1 hover:text-gray duration-300"
            onClick={(e) => leftMenuDisplay(e)}
          >
            <FontAwesomeIcon icon="th" size="lg" />
          </a>
        </div>
        <div className="absolute left-1/2 translateX-center">
          <a href="">
            <img
              className="h-20 hidden md:block dark:hidden"
              src={`${process.env.PUBLIC_URL}/images/woolf-logo-lg.svg`}
            ></img>

            <img
              className="h-20 hidden md:dark:block"
              src={`${process.env.PUBLIC_URL}/images/woolf-logo-lg-dark.svg`}
            ></img>
          </a>
        </div>
        <section className="flex items-center">
          <Link
            to="/register"
            className="hidden lg:block mr-4 pt-1 px-2.5 pb-1.5 bg-black rounded-2xl  text-white text-sm hover:bg-gray duration-300"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="hidden lg:block mr-4 hover:text-gray duration-300"
          >
            <FontAwesomeIcon icon="sign-in-alt" size="lg" />
          </Link>

          <a href="#" className="mr-4 hover:text-gray duration-300">
            <FontAwesomeIcon
              icon="search"
              size="lg"
              onClick={(e) => topMenuDisplay(e)}
            />
          </a>

          <div className="mr-4 onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              tabIndex="0"
              value={isDark}
              onChange={() => HandleChangeDarkMode()}
            />
            <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
          </div>

          <Link
            to="/cart"
            className="mr-5 lg:mr-1 relative hover:text-gray duration-300"
          >
            <FontAwesomeIcon icon="shopping-cart" size="lg" />
            <label
              className={
                userCartItemNum
                  ? "absolute -top-1.5 inline-block w-5 h-5 leading-5 text-center rounded-full bg-red text-white text-xs"
                  : "hidden"
              }
            >
              {userCartItemNum}
            </label>
          </Link>
          <a>
            <FontAwesomeIcon
              icon="bars"
              size="lg"
              className="block lg:hidden"
              onClick={(e) => rightMenuDisplay(e)}
            />
          </a>
        </section>
      </header>
    </section>
  )
}

export default Header
