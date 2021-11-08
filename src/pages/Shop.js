import { useState } from "react"
import { useSelector } from "react-redux"
import SidebarProduct from "../components/layout/SidebarProduct"
import ProductCard from "../components/product/ProductCard"

function Shop() {
  const [product] = useState(useSelector((state) => state.productDate))
  return (
    <section className="flex gap-x-4">
      <section className="hidden lg:block w-1/5">
        <SidebarProduct></SidebarProduct>
      </section>
      <section className="w-full lg:w-4/5 grid grid-cols-4 gap-x-4 gap-y-8">
        {product.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            img={item.img}
            price={item.price}
            discount={item.discount}
          ></ProductCard>
        ))}
      </section>
    </section>
  )
}

export default Shop
