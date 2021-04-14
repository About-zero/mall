import { post, deleteProduct } from '../utils/request'
export const reqSubmitOrder = (data) => post('/api/v1/orders', data)
import {get } from '../utils/request'
export const getOrderList = () => get("/api/v1/orders")
export const deleteOrder = (id) => deleteProduct("/api/v1/orders/" + id)
    //根据id获取订单详情
export const orderDetail = (id) => get("/api/v1/orders/" + id)