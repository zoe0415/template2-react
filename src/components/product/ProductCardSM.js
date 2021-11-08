import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProductCardSM() {
  const [price] = useState(250)
  const handleDeleteItem = () => {
    console.log("delete")
  }
  return (
    <section className="relative flex p-4 bg-gray-light rounded-2xl">
      <FontAwesomeIcon
        icon="times"
        className="absolute top-2 left-2 text-red cursor-pointer transform hover:scale-110"
        onClick={() => handleDeleteItem()}
      ></FontAwesomeIcon>
      <section className="w-3/5 p-2">
        <Link to="#" className="inline-block mb-2 font-bold hover:text-gray">
          商品名稱
        </Link>
        <div>
          <span>2</span>×<span>${price}</span>
        </div>
      </section>
      <section className="w-2/5">
        <Link to="#">
          <img
            src="images/product-chair1.jpg"
            className="rounded-2xl hover:opacity-80"
          ></img>
        </Link>
      </section>
    </section>
  )
}

export default ProductCardSM
