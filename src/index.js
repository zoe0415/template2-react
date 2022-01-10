import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
// import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"
import { createStore } from "redux"
// import counter from "./reducers"
// const store = createStore(counter)
import rootReducer from "./redux/reducers"
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
