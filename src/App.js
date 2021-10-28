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
  faCopyright
)

// components
// import { Books, Electronics } from "./pages/Page"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
// import Register from "./pages/Register"

function App() {
  return (
    <main>
      <section className="px-8">
        <Header></Header>
        <Route path="/" component={Home} />
      </section>
      <Footer></Footer>

      {/* <Route path="/register" component={Register} />
      <Route path="/books" component={Books} />
      <Route path="/electronics" component={Electronics} /> */}
    </main>
  )
}

export default App
