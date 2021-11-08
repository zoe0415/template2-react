import Sidebar from "../components/layout/Sidebar"

function Product() {
  return (
    <section className="flex gap-x-4">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>
      <section className="w-full lg:w-4/5"></section>
    </section>
  )
}

export default Product
