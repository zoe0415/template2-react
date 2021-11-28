import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import SidebarProduct from "../components/layout/SidebarProduct"
import ProductCard from "../components/product/ProductCard"

function Shop() {
  // url query
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()

  // data
  const [queryString, setQueryString] = useState(query.get("type"))
  const allProductList = useSelector((state) => state.product)

  // useEffect
  useEffect(() => {
    setQueryString(query.get("type"))
  }, [query, allProductList])

  // function
  const filterProducts = (queryString, allProductList) => {
    if (queryString == "all") {
      return allProductList
    } else {
      return allProductList.filter((item) => {
        return item.id.indexOf(queryString) == 0
      })
    }
  }
  const queryProducts = filterProducts(queryString, allProductList)
  // const queryProducts = useMemo(
  //   () => filterProducts(queryString, allProductList),
  //   [queryString, allProductList]
  // )

  return (
    <section className="flex gap-x-16">
      <section className="hidden lg:block w-1/5">
        <SidebarProduct></SidebarProduct>
      </section>
      <section className="w-full lg:w-4/5">
        <h3 className="pb-4 mb-8 text-3xl font-semibold border-b border-gray-light">
          Shop
        </h3>
        <section className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
          {queryProducts.map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              discount={item.discount}
            ></ProductCard>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Shop
