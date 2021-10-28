import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoLG from "../../images/woolf-logo-lg.svg"
import LogoSM from "../../images/woolf-logo-sm.svg"
import LogoLGDark from "../../images/woolf-logo-lg-dark.svg"
import LogoSMDark from "../../images/woolf-logo-sm-dark.svg"

function Header() {
  const [isDark, setIsDark] = useState(false)
  const handleIsDarkMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
  }

  // useEffect(() => {
  //   if(dmUrlNum){ //沒有值為空字串為falsy值則不執行urlConnection
  //     urlConnection(dmUrlNum) //當dmUrlNum有值，使用者是由文件管理進入，載入即串接API
  //   }
  // },[])

  return (
    <header className="relative my-8 flex items-center justify-between">
      <div>
        <a href="#" className="mx-1 hover:text-gray duration-300">
          <FontAwesomeIcon icon="th" size="lg" />
        </a>
      </div>
      <div className="absolute w-full flex justify-center">
        <a href="">
          <img src={LogoLG} className="h-20 hidden md:block dark:hidden"></img>
          <img src={LogoLGDark} className="h-20 hidden md:dark:block"></img>
          <img src={LogoSM} className="h-20 block md:hidden dark:hidden"></img>
          <img
            src={LogoSMDark}
            className="h-20 hidden dark:block md:dark:hidden"
          ></img>
        </a>
      </div>
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

        <a href="#" className="relative hover:text-gray duration-300">
          <FontAwesomeIcon icon="shopping-cart" size="lg" />
          <label className="absolute -top-1.5 inline-block w-5 h-5 leading-5 text-center rounded-full bg-red text-white text-xs">
            2
          </label>
        </a>
      </section>
    </header>
  )
}

export default Header
