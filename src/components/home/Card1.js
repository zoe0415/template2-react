function Card1(props) {
  return (
    <section className="group relative rounded-2xl overflow-hidden">
      <a href="#">
        <img
          src={`images/${props.img}`}
          className="group-hover:opacity-80 transition duration-300"
        ></img>
        <div className="absolute bottom-0 w-full px-4 pb-4">
          <h5 className="mb-2 text-white text-xl">{props.title}</h5>
          <button className="py-1.5 px-2.5 bg-black text-white text-sm rounded-2xl">
            More
          </button>
        </div>
      </a>
    </section>
  )
}

export default Card1
