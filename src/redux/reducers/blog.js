const initialState = [
  {
    title: "title",
    date: "2021-11-01",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair"],
  },
  {
    title: "title2",
    date: "2021-11-02",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Indoor", "Minimalism"],
  },
  {
    title: "title3",
    date: "2021-11-03",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Indoor"],
  },
  {
    title: "title4",
    date: "2021-11-04",
    describe: "describe，Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "blog-chair.jpg",
    tag: ["Minimalism"],
  },
  {
    title: "title5",
    date: "2021-11-05",
    describe:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Similique quia inventore ipsa aperiam rem illum maxime magni dolorum obcaecati iste, ab saepe cumque ad nihil quos mollitia, quibusdam sed illo.",
    img: "blog-chair.jpg",
    tag: ["Chair", "Indoor", "Minimalism"],
  },
]

const BlogReducer = (state = initialState) => {
  return state
}

export default BlogReducer
