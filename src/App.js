// import logo from "./logo.svg"
// import "./App.css"

// ---------------------------------------------------------------------------
// router
import { Route } from "react-router-dom"

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
  faBars,
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
  faBars
)

// components
// import { Books, Electronics } from "./pages/Page"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import TopBtn from "./components/layout/TopBtn"
// import Register from "./pages/Register"

function App() {
  return (
    <main>
      <Header></Header>
      <TopBtn></TopBtn>
      <section className="px-8 pt-28">
        <Route path="/" component={Home} exact />
        {/* <Route path="/blog/:type?" component={Blog} /> */}
        <Route path="/blog" component={Blog} />
      </section>
      <Footer></Footer>
    </main>
  )
}

export default App
