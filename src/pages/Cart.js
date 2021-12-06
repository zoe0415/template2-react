import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DeleteCartIem } from "../redux/actions"
import Sidebar from "../components/layout/Sidebar"

function Cart() {
  const dispatch = useDispatch()
  const userCart = useSelector((state) => state.userCart)

  const deleteItem = (id) => {
    dispatch(DeleteCartIem(id))
  }

  const updateItem = (id, num) => {
    console.log(id, num)
  }

  return (
    <section className="flex gap-x-16">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>

      <section className="w-full lg:w-4/5">
        <h3 className="pb-4 mb-8 text-3xl font-semibold border-b border-gray-light">
          Cart
        </h3>

        {/* 先判斷購物車有無內容 */}
        {userCart.length == 0 ? (
          <section>
            <p className="text-center text-3xl">Your cart is currently empty.</p>
            <div className="mt-8 text-center">
              <Link
                to={{
                  pathname: "/shop",
                  search: "type=all",
                }}
                className="py-2 px-4 bg-black text-white rounded-2xl text-base"
              >
                Return to shop
              </Link>
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-x-8">
            <section className="xl:col-span-2">
              {/* title */}
              <section className="grid grid-cols-12 items-center pb-2 border-b border-gray-light">
                <p className="col-span-3"></p>
                <p className="col-span-2 font-semibold">Product</p>
                <p className="col-span-2 font-semibold">Price</p>
                <p className="col-span-2 font-semibold">Quantity</p>
                <p className="col-span-2 font-semibold">Total</p>
                <p className="col-span-1"></p>
              </section>
              {/* cart */}
              {userCart.map((item, index) => (
                <section
                  key={index}
                  className="grid grid-cols-12 items-center py-2 border-b border-gray-light"
                >
                  <div className="col-span-3">
                    <img
                      src="/images/product-chair1.jpg"
                      className="w-1/2 rounded-2xl"
                    ></img>
                  </div>

                  <div className="col-span-2">
                    <Link to="#">{item.name}</Link>
                  </div>

                  <div className="col-span-2">${item.price}</div>

                  <div className="col-span-2">
                    <input
                      type="number"
                      value={item.num}
                      className="w-14 py-2.5 text-center border border-gray-light rounded-2xl outline-none dark:text-black-text"
                      onChange={() => updateItem(item.id)}
                    ></input>
                  </div>

                  <div className="col-span-2">
                    ${Number(item.price) * Number(item.num)}
                  </div>

                  <div className="col-span-1">
                    <button
                      className="transform hover:text-gray"
                      onClick={() => deleteItem(item.id)}
                    >
                      <FontAwesomeIcon icon="trash-alt" />
                    </button>
                  </div>
                </section>
              ))}
            </section>

            <section className="mt-16 xl:mt-0 p-4 bg-gray-light rounded-2xl dark:text-black-text">
              <h4 className="text-2xl font-semibold">You may be interested in…</h4>
              <section className="grid grid-cols-2">
                <div className="row-span-2 bg-gray-light rounded-2xl">
                  <img></img>
                </div>
                <Link to="#">Happy Flower Pot</Link>
                <div>$150</div>
              </section>
              <section>
                <p className="py-4 font-semibold">Cart totals</p>
                <div className="grid grid-cols-3">
                  <p className="py-2 border-t border-gray">Subtotal</p>
                  <p className="py-2 border-t border-gray col-span-2">$450</p>
                  <p className="py-2 border-t border-gray">Total</p>
                  <p className="py-2 border-t border-gray col-span-2 font-semibold">
                    $450
                  </p>
                </div>
                <Link
                  to="#"
                  className="inline-block w-full py-2.5 text-center bg-black text-white rounded-2xl"
                >
                  Proceed to checkout
                </Link>
              </section>
            </section>
          </section>
        )}
      </section>
    </section>
  )
}

export default Cart
