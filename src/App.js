import { Route, Switch, Redirect } from "react-router-dom"

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faTh,
  faStar,
  faStarHalfAlt,
  faPlus,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faTimes,
  faChevronDown,
  faChevronUp,
  faBars,
  faTrashAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar, faCopyright } from "@fortawesome/free-regular-svg-icons"
library.add(
  fab,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faTh,
  faStar,
  faStarHalfAlt,
  farStar,
  faCopyright,
  faPlus,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faTimes,
  faChevronDown,
  faChevronUp,
  faBars,
  faTrashAlt,
  faKey
)

// components
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import TopBtn from "./components/layout/TopBtn"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <main>
      <Header></Header>
      <TopBtn></TopBtn>
      <section className="px-8 pt-28 pb-8">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog/:type?" component={Blog} />
          {/* <Route path="/blog" component={Blog} /> */}
          <Route path="/shop" component={Shop} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route component={Home} />   404回到home，不會更改url*/}
          <Redirect to="/" />
        </Switch>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default App
