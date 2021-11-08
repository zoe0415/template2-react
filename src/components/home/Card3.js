function Card3(props) {
  return (
    <section className="group relative rounded-2xl overflow-hidden">
      <a href="#">
        <img src={`images/${props.img}`}></img>
        <div className="absolute top-full w-full h-0 flex justify-center items-center bg-black bg-opacity-70 overflow-hidden group-hover:h-full group-hover:top-0 duration-300">
          <h5 className="mb-2 text-white text-xl">{props.title}</h5>
        </div>
      </a>
    </section>
  )
}

export default Card3
