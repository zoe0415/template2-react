import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
// import { apiLogin } from "../axios/index"

function Login() {
  const [userInfo, setUserInfo] = useState({ name: "", password: "" })

  const updateField = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }

  // const testlogin = () => {
  //   apiLogin().then((res) => {
  //     console.log(res)
  //   })
  // }

  // useEffect(() => {
  //   testlogin()
  // })
  return (
    <section className="mx-auto w-11/12 sm:w-1/2 xl:w-1/4 text-base">
      <p>Username or email address</p>
      <input
        type="text"
        name="name"
        value={userInfo.account}
        onChange={updateField}
        className="w-full mt-2 mb-6 py-2 px-4 bg-gray-light rounded-2xl"
      ></input>

      <p>Password</p>
      <input
        type="password"
        name="pwd"
        value={userInfo.password}
        onChange={updateField}
        className="w-full mt-2 mb-14 py-2 px-4 bg-gray-light rounded-2xl"
      ></input>

      <label className="mb-4 checkbox-container">
        <input type="checkbox" />
        <span className="mark"></span>
        <span className="text">Remember me</span>
      </label>

      <button
        type="button"
        className="w-full py-2 bg-black text-white rounded-2xl"
        onClick={() => {
          console.log(userInfo)
        }}
      >
        Login
      </button>

      <Link className="hover:text-gray" to="#">
        <FontAwesomeIcon icon="key" /> Lost your password?
      </Link>
    </section>
  )
}

export default Login
