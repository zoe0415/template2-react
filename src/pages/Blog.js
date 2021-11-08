import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import Sidebar from "../components/layout/Sidebar"
import BlogCard from "../components/blog/BlogCard"

function Blog() {
  // url query
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()
  // data
  const [blogList] = useState(useSelector((state) => state.blogDate))

  useEffect(() => {
    console.log(query.get("type"))
  })

  return (
    <section className="flex gap-x-4">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>
      <section className="w-full lg:w-4/5 grid grid-cols-4 gap-x-4 gap-y-8">
        {blogList.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            describe={item.describe}
            date={item.date}
            img={item.img}
            tag={item.tag}
          ></BlogCard>
        ))}
      </section>
    </section>
  )
}

export default Blog
