import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProductCard() {
  return (
    <section>
      <div className="overflow-hidden">
        <img src={require("../images/product-chair1.jpg").default}></img>
      </div>
      <h5>Eames chair</h5>
      <div>
        <FontAwesomeIcon className="text-yellow" icon="star" />
        <FontAwesomeIcon className="text-yellow" icon="star-half-alt" />
        <FontAwesomeIcon className="text-yellow" icon={["far", "star"]} />
      </div>
      <p>
        $<span>300</span>
      </p>
      <button>+ ADD</button>
    </section>
  )
}

export default ProductCard
