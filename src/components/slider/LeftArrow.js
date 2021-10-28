import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function LeftArrow(props) {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 translateY-center flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-70 cursor-pointer z-10"
    >
      <FontAwesomeIcon icon="arrow-left" />
    </div>
  )
}

export default LeftArrow
