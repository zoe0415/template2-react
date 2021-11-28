import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import Sidebar from "../components/layout/Sidebar"
import BlogCard from "../components/blog/BlogCard"

function Blog() {
  // url query
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()
  // data
  const [queryString, setQueryString] = useState(query.get("type"))
  const allBlogList = useSelector((state) => state.blog)

  // useEffect
  useEffect(() => {
    setQueryString(query.get("type"))
  }, [query, allBlogList])

  // function
  const filterProducts = (queryString, allBlogList) => {
    if (queryString == "All" || !queryString) {
      return allBlogList
    } else {
      return allBlogList.filter((item) => {
        return item.tag.includes(queryString)
      })
    }
  }
  const queryBlog = filterProducts(queryString, allBlogList)

  return (
    <section className="flex gap-x-16">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>
      <section className="w-full lg:w-4/5">
        <h3 className="pb-4 mb-8 text-3xl font-semibold border-b border-gray-light capitalize">
          {queryString ? queryString : "Blog"}
        </h3>
        <section className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
          {queryBlog.map((item, index) => (
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
    </section>
  )
}

export default Blog
