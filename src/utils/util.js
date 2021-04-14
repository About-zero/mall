// 验证用户是否登录
export const isLogined = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
// 添加token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};
// 获取token
export const getToken = () => {
  return localStorage.getItem("token");
};
// 移出token
export const removeToken = () => {
  localStorage.removeItem("token");
};
