import { useState } from "react"

function Register() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" })

  const updateField = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section className="mx-auto w-11/12 sm:w-1/2 xl:w-1/4 text-base">
      <p>Username</p>
      <input
        type="text"
        name="name"
        value={userInfo.name}
        onChange={updateField}
        className="w-full mt-2 mb-6 py-2 px-4 bg-gray-light rounded-2xl"
      ></input>

      <p>Email address</p>
      <input
        type="text"
        name="email"
        value={userInfo.email}
        onChange={updateField}
        className="w-full mt-2 mb-6 py-2 px-4 bg-gray-light rounded-2xl"
      ></input>

      <p>Password</p>
      <input
        type="password"
        name="password"
        value={userInfo.password}
        onChange={updateField}
        className="w-full mt-2 mb-16 py-2 px-4 bg-gray-light rounded-2xl"
      ></input>

      <button
        type="button"
        className="w-full py-2 bg-black text-white rounded-2xl"
        onClick={() => {
          console.log(userInfo)
        }}
      >
        Register
      </button>
    </section>
  )
}

export default Register
