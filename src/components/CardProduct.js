import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProductCard(props) {
  return (
    <section>
      <a href="" className="group">
        <div className="relative rounded-2xl overflow-hidden">
          <span className="absolute right-0 py-1.5 px-3 z-10 rounded-bl-xl bg-gray text-sm text-white">
            SALE
          </span>
          <img src={`images/${props.img}`} className="group-hover:opacity-80"></img>
        </div>
        <h5 className="group-hover:text-gray my-3 text-center text-xl font-semibold">
          {props.name}
        </h5>
      </a>
      <div className="mb-1 text-center">
        <FontAwesomeIcon className="text-yellow" icon="star" />
        <FontAwesomeIcon className="text-yellow" icon="star-half-alt" />
        <FontAwesomeIcon className="text-yellow" icon={["far", "star"]} />
      </div>
      <div className="flex justify-center mb-6 text-lg font-semibold">
        {props.discount ? (
          <del className="text-gray">
            $<span>{props.price}</span>
          </del>
        ) : (
          false
        )}

        <p>
          $<span>{props.discount ? props.discount : props.price}</span>
        </p>
      </div>
      <button className="w-full py-1.5 bg-yellow-light hover:bg-geyser rounded-2xl duration-200">
        <FontAwesomeIcon icon="plus" className="mr-2" />
        ADD
      </button>
    </section>
  )
}

export default ProductCard
