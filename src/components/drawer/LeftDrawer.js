import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function LeftDrawer(props) {
  return (
    <ul
      className={
        props.isShowMenu
          ? "fixed left-0 w-3/5 md:w-1/5 h-full pt-12 pl-8 bg-gray-light2 shadow-2xl z-30 overflow-y-auto duration-700 scroll-bar"
          : "fixed -left-1/4 w-1/5 h-full pt-12 pl-8 bg-gray-light2 shadow-2xl z-30 overflow-hidden duration-700 scroll-bar"
      }
    >
      <FontAwesomeIcon
        icon="times"
        className="absolute right-8 top-8 text-xl cursor-pointer hover:text-gray"
        onClick={() => props.setIsShowMenu(false)}
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
  )
}

export default LeftDrawer
