import {post} from '../utils/request'
export const reqSubmitOrder = (data)=>post('/api/v1/orders',data)