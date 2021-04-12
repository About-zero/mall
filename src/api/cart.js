import {get, post, deleteProduct } from '../utils/request'
// 加入购物车
export const reqAddCart = (data) => post('/api/v1/shop_carts', data)
    // 获取购物车信息
export const reqCartDetail = () => get('/api/v1/shop_carts')
    // 删除购物车商品
export const reqRemoveProduct = (id) => deleteProduct('/api/v1/shop_carts/' + id)