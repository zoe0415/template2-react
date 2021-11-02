import Tag from "../components/Tag"

function CardBlog(props) {
  return (
    <section>
      {/* img */}
      <a href="#">
        <img src={`/images/${props.img}`} className="rounded-2xl"></img>
      </a>

      {/* content */}
      <section className="p-2">
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold clamp clamp-2">title</h5>
        </a>
        <p className="mb-2">
          {new Date(props.date).toDateString().split(" ")[1]}
          {props.date.split("-")[2]} , {props.date.split("-")[0]}
        </p>
        <p className="mb-4 clamp clamp-3">
          describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Similique quia inventore ipsa aperiam rem illum maxime magni dolorum
          obcaecati iste, ab saepe cumque ad nihil quos mollitia, quibusdam sed illo.
        </p>
        <section>
          <Tag name="Chair"></Tag>
          <Tag name="Design"></Tag>
          <Tag name="Living"></Tag>
          <Tag name="Chair"></Tag>
          <Tag name="Design"></Tag>
          <Tag name="Living"></Tag>
        </section>
      </section>
    </section>
  )
}

export default CardBlog
