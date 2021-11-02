import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function TopBtn() {
  const screenHeight = window.innerHeight
  useEffect(() => {
    console.log(screenHeight)
  })
  // window.addEventListener("resize", () => {
  //   console.log(window.innerHeight)
  // })
  return (
    <button className="fixed bottom-10 right-10 block z-20 duration-300">
      <FontAwesomeIcon icon="arrow-up" size="lg" />
    </button>
  )
}

export default TopBtn
