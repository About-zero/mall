import { post } from '../utils/request'
export const reqRegister = (data) => post('/api/v1/auth/reg', data)
export const reqLogin = (data) => post('/api/v1/auth/login', data)