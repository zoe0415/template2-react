import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TopDrawer(props) {
  return (
    <section
      className={
        props.isShowMenu
          ? "fixed flex items-center justify-center w-full h-screen bg-white z-40 duration-700"
          : "fixed flex items-center justify-center w-full h-0 overflow-hidden bg-white z-40 duration-700"
      }
    >
      <FontAwesomeIcon
        icon="times"
        className="absolute right-10 top-10 text-xl cursor-pointer hover:text-gray"
        onClick={() => props.setIsShowMenu(false)}
      />
      <div>
        <input
          placeholder="What are you looking for?"
          className="block p-4 text-center text-2xl outline-none"
        ></input>
        <div className="flex justify-evenly mt-10 mb-6">
          <label htmlFor="searchProduct" className="radio-container">
            <input type="radio" id="searchProduct" name="searchRadio"></input>
            <span className="mark"></span>
            <span className="text">Products</span>
          </label>
          <label htmlFor="searchPost" className="radio-container">
            <input type="radio" id="searchPost" name="searchRadio"></input>
            <span className="mark"></span>
            <span className="text">Posts</span>
          </label>
        </div>
        <button className="w-full py-2 bg-black text-white rounded-2xl">
          Search
        </button>
      </div>
    </section>
  )
}

export default TopDrawer
