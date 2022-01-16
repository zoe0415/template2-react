import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductSM from "../product/ProductCardSM"

function SidebarProduct() {
  // data
  const userCart = useSelector((state) => state.userCart)
  const [categoriesMenuList] = useState(
    useSelector((state) => state.menuList[0].subMenu)
  )
  const [price, setPrice] = useState(0) // Filter price
  const [priceTwo, setPriceTwo] = useState(1000) // Filter price
  const [rangeLine, setRangeLine] = useState({ width: "100%", left: 0 }) // Filter line
  const [userCartTotalPrice, setUserCartTotalPrice] = useState(0)
  // method
  const handleChangePrice = (e) => {
    setPrice(parseInt(e.target.value))
    calcRangeLine()
  }
  const handleChangePriceTwo = (e) => {
    setPriceTwo(parseInt(e.target.value))
    calcRangeLine()
  }
  const calcRangeLine = () => {
    let width = Math.abs(price / 10 - priceTwo / 10)
    let left = price > priceTwo ? priceTwo / 10 : price / 10
    setRangeLine({ width: width + "%", left: left + "%" })
  }

  useEffect(() => {
    let tempPrice = 0
    userCart.forEach((el) => {
      tempPrice += el.discount
        ? Number(el.discount) * Number(el.num)
        : Number(el.price) * Number(el.num)
    })
    setUserCartTotalPrice(tempPrice)
  }, [userCart])

  return (
    <section>
      {/* cart */}
      <section>
        <h5 className="mb-2 text-xl font-semibold">Cart</h5>
        {userCart.length == 0 ? (
          <div>No products in the cart.</div>
        ) : (
          <section>
            {userCart.map((item, index) => (
              <ProductSM key={index} item={item}></ProductSM>
            ))}
            <div className="mb-4">
              Subtotal : <strong className="ml-1">${userCartTotalPrice}</strong>
            </div>
            <div className="flex justify-end">
              <Link
                to="/cart"
                className="inline-block mr-4 py-1.5 px-3 bg-black text-white rounded-2xl"
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
        )}
      </section>

      {/* fliter */}
      <section className="mt-12">
        <h5 className="text-xl font-semibold">Filter by price</h5>
        {/* <section className="my-4">

        </section> */}
        <section className="my-4 h-1 range-slider">
          <span className="range-line" style={rangeLine}></span>
          <input
            value={price}
            min="0"
            max="1000"
            step="10"
            type="range"
            onChange={(e) => handleChangePrice(e)}
          />
          <input
            value={priceTwo}
            min="0"
            max="1000"
            step="10"
            type="range"
            onChange={(e) => handleChangePriceTwo(e)}
          />
        </section>
        <section className="flex justify-between items-center">
          <p>
            Price: ${price < priceTwo ? price : priceTwo} - $
            {price < priceTwo ? priceTwo : price}
          </p>
          <button className="inline-block py-1.5 px-3 bg-black text-white rounded-2xl">
            Filter
          </button>
        </section>
      </section>

      {/* Product categories */}
      <section className="mt-12">
        <h5 className="mb-2 text-xl font-semibold">Product categories</h5>
        {categoriesMenuList.map((item, index) => (
          <Link
            key={index}
            to={{
              pathname: "/shop",
              search: `type=${item.link}`,
            }}
            className="block mb-1.5 hover:text-gray"
          >
            {item.title}
          </Link>
        ))}
      </section>
    </section>
  )
}

export default SidebarProduct
