import Axios from "axios"

export const serve = Axios.create({
  // baseURL: "https://api.kcg.gov.tw/",
  baseURL: process.env.REACT_APP_BASE_API_URL,
  // withCredentials: true, // 跨域请求时发送 cookies
  // timeout: 60000, // request timeout
})

// requset攔截器(在request發送前)
const serviceRequestInterceptor = serve.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = "Bearer " + localStorage.getItem("access")
    return config
  },
  function (error) {
    console.log("Service error: ", error)
    return Promise.reject(error)
  }
)
Axios.interceptors.request.eject(serviceRequestInterceptor) // 移除攔截器

// response攔截器(then與catch前)
const serviceResponseInterceptor = serve.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    console.log(error.config)
    if (error.response) {
      switch (error.response.status) {
        case 400:
          {
            const { message } = error.response.data
            alert(`${error.response.status}: ${message || "資料錯誤"}。`)
          }
          break
        case 401: {
          if (error.config.url == "/doLogin") {
            alert("帳號或密碼輸入錯誤，請再次確認")
            return Promise.reject(error)
          } else {
            localStorage.removeItem("name")
            localStorage.removeItem("access")
            alert("登入失效，請重新登入")
            window.location.href = "/"
            return Promise.reject(error)
          }
        }
        // break;
        case 404:
          alert(`${error.response.status}: 資料來源不存在`)
          break
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      if (
        error.code === "ECONNABORTED" &&
        error.message &&
        error.message.indexOf("timeout") !== -1
      ) {
        // request time out will be here
        alert("網路連線逾時，請點「確認」鍵後繼續使用。")
      } else {
        // shutdonw api server
        alert("網路連線不穩定，請稍候再試")
      }
    }
    return Promise.reject(error)
  }
)

Axios.interceptors.response.eject(serviceResponseInterceptor) // 移除攔截器
