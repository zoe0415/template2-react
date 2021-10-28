import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const handleIsDarkMode = () => {
    setIsDark(!isDark)
  }
  const handleShowMenu = (e) => {
    e.preventDefault()
    setIsShowMenu(!isShowMenu)
  }

  return (
    <section>
      <ul
        className={
          isShowMenu
            ? "fixed left-0 w-1/5 h-full pt-12 pl-8 bg-gray-light2 shadow-2xl z-30 overflow-y-auto duration-700"
            : "fixed -left-1/4 w-1/5 h-full pt-12 pl-8 bg-gray-light2 shadow-2xl z-30 overflow-hidden duration-700"
        }
      >
        <FontAwesomeIcon
          icon="times"
          className="absolute right-8 top-8 text-xl cursor-pointer hover:text-gray"
          onClick={handleShowMenu}
        />
        <li>
          <a href="#" className="block my-2 py-2 hover:text-gray duration-150">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block my-2 py-2 hover:text-gray duration-150">
            My account
          </a>
        </li>
        <li>
          <a href="#" className="block my-2 py-2 hover:text-gray duration-150">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="block my-2 py-2 hover:text-gray duration-150">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="block my-2 py-2 hover:text-gray duration-150">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block my-2 py-2 hover:text-gray duration-150">
            Contact
          </a>
        </li>
      </ul>
      <header className="fixed left-0 w-full p-8 flex items-center justify-between bg-white z-20">
        <div>
          <a href="#" className="mx-1 hover:text-gray duration-300">
            <FontAwesomeIcon icon="th" size="lg" onClick={handleShowMenu} />
          </a>
        </div>
        {/* <div className="absolute w-full flex justify-center">
        <a href="">
          <img
            className="h-20 hidden md:block dark:hidden"
            src={`${process.env.PUBLIC_URL}/images/woolf-logo-lg.svg`}
          ></img>

          <img
            className="h-20 hidden md:dark:block"
            src={`${process.env.PUBLIC_URL}/images/woolf-logo-lg-dark.svg`}
          ></img>

          <img
            className="h-20 block md:hidden dark:hidden"
            src={`${process.env.PUBLIC_URL}/images/woolf-logo-sm.svg`}
          ></img>

          <img
            src={`${process.env.PUBLIC_URL}/images/woolf-logo-sm-dark.svg`}
            className="h-20 hidden dark:block md:dark:hidden"
          ></img>
        </a>
      </div> */}
        <section className="flex items-center">
          <a
            href="#"
            className="mr-4 pt-1 px-2.5 pb-1.5 bg-black rounded-2xl  text-white text-sm hover:bg-gray duration-300"
          >
            Register
          </a>

          <a href="#" className="mr-4 hover:text-gray duration-300">
            <FontAwesomeIcon icon="sign-in-alt" size="lg" />
          </a>

          <a href="#" className="mr-4 hover:text-gray duration-300">
            <FontAwesomeIcon icon="search" size="lg" />
          </a>

          <div className="mr-4 onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              tabIndex="0"
              value={isDark}
              onChange={() => handleIsDarkMode()}
            />
            <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
          </div>

          <a href="#" className="mr-1 relative hover:text-gray duration-300">
            <FontAwesomeIcon icon="shopping-cart" size="lg" />
            {/* <label className="absolute -top-1.5 inline-block w-5 h-5 leading-5 text-center rounded-full bg-red text-white text-xs">
            2
          </label> */}
          </a>
        </section>
      </header>
    </section>
  )
}

export default Header
