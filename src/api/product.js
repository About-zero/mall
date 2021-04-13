// swiper接口
import { get } from "../utils/request";
export const reqSwiper = () => get("/api/v1/products");
// 商品列表接口
export const reqProducts = (data) => get("/api/v1/products", data);
// 商品详情接口
export const reqProductDetail = (id) => get("/api/v1/products/" + id);
