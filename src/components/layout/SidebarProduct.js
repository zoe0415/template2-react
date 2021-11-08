import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductSM from "../product/ProductCardSM"

function SidebarProduct() {
  const [categoriesMenuList] = useState(
    useSelector((state) => state.menuList[0].subMenu)
  )
  const [price, setPrice] = useState(0)
  const [priceTwo, setPriceTwo] = useState(1000)
  const [rangeLine, setRangeLine] = useState({ width: "100%", left: 0 })
  const handleChange = (e) => {
    setPrice(parseInt(e.target.value))
    calcRangeLine()
  }
  const handleChange2 = (e) => {
    setPriceTwo(parseInt(e.target.value))
    calcRangeLine()
  }
  const calcRangeLine = () => {
    let width = Math.abs(price / 10 - priceTwo / 10)
    let left = price > priceTwo ? priceTwo / 10 : price / 10
    setRangeLine({ width: width + "%", left: left + "%" })
  }
  return (
    <section>
      {/* cart */}
      <section>
        <h5 className="text-xl font-semibold">Cart</h5>
        <ProductSM></ProductSM>
        <div>
          <p>Subtotal:</p>$300
        </div>
        <div>
          <Link
            to="#"
            className="inline-block py-1.5 px-3 bg-black text-white rounded-2xl"
          >
            View cart
          </Link>
          <Link
            to="#"
            className="inline-block py-1.5 px-3 bg-black text-white rounded-2xl"
          >
            Checkout
          </Link>
        </div>
      </section>

      {/* fliter */}
      <section>
        <h5 className="text-xl font-semibold">Filter by price</h5>
        <section className="range-slider">
          <span className="range-line" style={rangeLine}></span>
          <input
            value={price}
            min="0"
            max="1000"
            step="10"
            type="range"
            onChange={(e) => handleChange(e)}
          />
          <input
            value={priceTwo}
            min="0"
            max="1000"
            step="10"
            type="range"
            onChange={(e) => handleChange2(e)}
          />
        </section>
        <button className="inline-block py-1.5 px-3 bg-black text-white rounded-2xl">
          Filter
        </button>
        <p>
          Price: ${price < priceTwo ? price : priceTwo} - $
          {price < priceTwo ? priceTwo : price}
        </p>
      </section>

      {/* Product categories */}
      <section>
        <h5 className="text-xl font-semibold">Product categories</h5>
        {categoriesMenuList.map((item, index) => (
          <Link key={index} to={item.link} className="block">
            {item.title}
          </Link>
        ))}
      </section>
    </section>
  )
}

export default SidebarProduct
