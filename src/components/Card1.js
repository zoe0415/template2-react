function Card1(props) {
  const { test } = props

  return (
    <section className="relative rounded-2xl overflow-hidden">
      <a href="#">
        <img
          src={require("../images/card1-1.jpeg").default}
          className="hover:opacity-80 transition duration-300"
        ></img>
        <div className="absolute bottom-0 w-full bg-black-opacity30">
          <h5 className="mb-2 text-white text-xl">Example</h5>
          <button className="py-1.5 px-2.5 bg-black text-white text-sm rounded-2xl">
            More{test}
          </button>
        </div>
      </a>
    </section>
  )
}

export default Card1
