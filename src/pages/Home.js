import Card1 from "../components/Card1"
import ProductCard from "../components/CardProduct"

function Home() {
  return (
    <section className="flex">
      <section className="w-1/5"></section>
      <section className="w-4/5">
        <section className="grid grid-cols-4 gap-4">
          <Card1 test="111"></Card1>
          <Card1 test="222"></Card1>
        </section>
        <section className="grid grid-cols-4 gap-4">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </section>
      </section>
    </section>
  )
}

export default Home
