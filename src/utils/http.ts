/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-10-19 14:07:20
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2022-03-22 09:50:32
 * @Description: file content
 * @FilePath: /blast-web-2_x/src/utils/http.ts
 */
import axios from "axios"
import type { AxiosResponse } from "axios"
import { useUserStore } from "@/store/modules/user"
// import {
//   blast_baseURL,
//   blast_tokenName,
//   blast_orgId,
//   blast_requestTimeout,
// } from "@/config";
// // import store from "@/store";
import { message as Message } from "ant-design-vue"
import { storage } from "./storage"

// const handleCode = (code, msg) => {
//   switch (code) {
//     case invalidCode:
//       Vue.prototype.$baseMessage(msg || `后端接口${code}异常`, "error");
//       store.dispatch("user/resetAccessToken").catch(() => {});
//       if (loginInterception) {
//         location.reload();
//       }
//       break;
//     case noPermissionCode:
//       router.push({ path: "/401" }).catch(() => {});
//       break;
//     default:
//       Vue.prototype.$baseMessage(msg || `后端接口${code}异常`, "error");
//       break;
//   }
// };

const http = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL as string,
  timeout: 5000,
  withCredentials: false // send cookies when cross-domain requests
  // headers: {
  //   "Content-Type": contentType,
  // },
})

http.interceptors.request.use(
  (config) => {
    const userState = useUserStore()

    const token = userState.getToken

    if (token && config.headers) {
      config.headers["token"] = token
    }
    // if (store.getters["user/currentOrg"] && config.headers) {
    //   const org = store.getters["user/currentOrg"];

    //   config.headers[blast_orgId] = org.id;
    // }a
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    // const { code, msg } = data;
    // 操作正常Code数组
    return data
    // 是否操作正常
    // if (codeVerificationArray.includes(code)) {

    // } else {
    //   return Promise.reject(
    //     "请求异常拦截:" + JSON.stringify({ url: config.url, code, msg }) ||
    //       "Error"
    //   );
    // }
  },
  (error) => {
    const { response, message } = error
    if (error.response && error.response.data) {
      const { status, data } = response

      switch (status) {
        case 401:
          // const userState = useUserStore()

          // userState.userLogout()

          break
      }

      if (data.message) {
        Message.error(data.message)
      }
      if (data.msg) {
        Message.error(data.msg)
      }

      return Promise.reject(error)
    } else {
      let { message } = error
      if (message === "Network Error") {
        message = "后端接口连接异常"
      }
      if (message.includes("timeout")) {
        message = "后端接口请求超时"
      }
      if (message.includes("Request failed with status code")) {
        const code = message.substr(message.length - 3)
        message = "后端接口" + code + "异常"
      }
      console.log(message || `后端接口未知异常`, "error")
      Message.error(message)
      return Promise.reject(error)
    }
  }
)

export default http
