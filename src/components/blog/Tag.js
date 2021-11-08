function Tag(props) {
  return (
    <a
      href="#"
      className="inline-block mr-2 mb-2 p-1.5 px-3 bg-black text-white rounded-2xl"
    >
      {props.name}
    </a>
  )
}

export default Tag
