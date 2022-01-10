import Tag from "./Tag"

function BlogCard(props) {
  return (
    <section>
      {/* img */}
      <a href="#">
        <img src={`images/${props.img}`} className="rounded-2xl"></img>
      </a>

      {/* content */}
      <section className="p-2">
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold clamp clamp-2">{props.title}</h5>
        </a>
        <p className="mb-2">
          {new Date(props.date).toDateString().split(" ")[1]}
          {props.date.split("-")[2]} , {props.date.split("-")[0]}
        </p>
        <p className="mb-4 clamp clamp-3">{props.describe}</p>
        <section>
          {props.tag.map((item, index) => (
            <Tag key={index} name={item}></Tag>
          ))}
        </section>
      </section>
    </section>
  )
}

export default BlogCard
