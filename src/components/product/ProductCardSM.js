import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DeleteCartIem } from "../../redux/actions"

function ProductCardSM(props) {
  const dispatch = useDispatch()

  const handleDeleteItem = (id) => {
    dispatch(DeleteCartIem(id))
  }

  return (
    <section className="relative flex mb-4 p-4 bg-gray-light rounded-2xl">
      <FontAwesomeIcon
        icon="times"
        className="absolute top-2 left-2 text-red cursor-pointer transform hover:scale-110"
        onClick={() => handleDeleteItem(props.item.id)}
      ></FontAwesomeIcon>
      <section className="w-3/5 p-2">
        <Link to="#" className="inline-block mb-2 font-bold hover:text-gray">
          {props.item.name}
        </Link>
        <div>
          <span>{props.item.num}</span>×
          <span>
            ${props.item.discount ? props.item.discount : props.item.price}
          </span>
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
