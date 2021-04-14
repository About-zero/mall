import { post } from "../utils/request";
import { get } from "../utils/request";
import { put } from "../utils/request";
// 新增收货地址
export const addressAdd = (data) => post("/api/v1/addresses", data);
export const addressSearch = (params) => get("/api/v1/addresses", params);
export const addressUpdate = (id,params) => put(`/api/v1/addresses/${id}`, params);
export const addressSingle = (id) => get(`/api/v1/addresses/${id}`);