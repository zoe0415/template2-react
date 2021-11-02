import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import Sidebar from "../components/layout/Sidebar"
import CardBlog from "../components/CardBlog"

function Blog() {
  // url query
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()
  // date
  const [date] = useState(useSelector((state) => state))

  useEffect(() => {
    console.log(date)
    console.log(query.get("type"))
  })

  return (
    <section className="flex">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>
      <section className="w-full lg:w-4/5 grid grid-cols-4 gap-x-4 gap-y-8">
        <CardBlog date="2021-11-01" img="blog-chair.jpg"></CardBlog>
        <CardBlog date="2021-11-02" img="blog-chair.jpg"></CardBlog>
        <CardBlog date="2021-11-03" img="blog-chair.jpg"></CardBlog>
        <CardBlog date="2021-11-04" img="blog-chair.jpg"></CardBlog>
        <CardBlog date="2021-11-03" img="blog-chair.jpg"></CardBlog>
        <CardBlog date="2021-11-04" img="blog-chair.jpg"></CardBlog>
      </section>
    </section>
  )
}

export default Blog
