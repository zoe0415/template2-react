import Sidebar from "../components/layout/Sidebar"

function Cart() {
  return (
    <section className="flex gap-x-4">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>
      <section className="w-full lg:w-4/5">
        <h3 className="mb-8 text-3xl font-semibold">Cart</h3>
        <section className="grid grid-cols-3 gap-4 h-8">
          <section className="col-span-2 bg-gray-light">
            <div></div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div></div>
          </section>
          <section className="bg-gray-light2"></section>
        </section>
      </section>
    </section>
  )
}

export default Cart
