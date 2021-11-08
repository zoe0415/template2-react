function Card2(props) {
  return (
    <a href="#" className="group">
      <section
        className="min-h-calc-w group-hover:opacity-80 duration-300 rounded-2xl overflow-hidden flex flex-col justify-between h-full p-4 text-white"
        style={{ backgroundColor: props.bgColor }}
      >
        <h4 className="self-end text-7xl ">{props.num}</h4>
        <div className="">
          <p>Special</p>
          <h5 className="mb-2 text-xl">{props.title}</h5>
        </div>
      </section>
    </a>
  )
}

export default Card2
