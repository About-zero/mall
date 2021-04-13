import {get } from '../utils/request'
export const getOrderList = () => get("/api/v1/orders")
export const deleteOrder = () => get("/api/v1/orders/:id")