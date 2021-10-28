import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {
  const [isDark, setIsDark] = useState(false)
  const handleIsDarkMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
  }

  return (
    <header className="fixed left-0 w-full p-8 flex items-center justify-between bg-white z-20">
      <div>
        <a href="#" className="mx-1 hover:text-gray duration-300">
          <FontAwesomeIcon icon="th" size="lg" />
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
  )
}

export default Header
