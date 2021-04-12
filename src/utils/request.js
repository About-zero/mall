import axios from 'axios'
import { serverURL } from './common'
import { getToken } from '../utils/util'
import { Notify } from "vant";

const instance = axios.create({
    baseURL: serverURL,
    timeoutL: 5000
})

instance.interceptors.request.use(function(config) {
    if (getToken()) {
        config.headers.authorization = "Bearer " + getToken();
    }
    return config;
}, function(error) {

    return Promise.reject(error);
});


instance.interceptors.response.use(function(response) {

    return response;
}, function(error) {
    alert(error)
    // 对响应错误做点什么
    if (error && error.message.indexOf("401") > -1) {
      // 危险通知
      Notify({ type: "danger", message: "没有授权,请登录" });
      location.href='/#/login'
    }
    return Promise.reject(error);
});

// get请求
export const get = (url, params) => instance.get(url, { params })
    // post 请求
export const post = (url, data) => instance.post(url, data)
    // delete请求
export const deleteProduct = (url) => instance.delete(url)