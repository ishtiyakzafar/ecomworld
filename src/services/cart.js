import http from "./http";

const addCartItems = (data) => {
  return http.post('cart/items', data);
}
const getUserCart = () => {
  return http.get('cart');
}
const deleteCartItem = (id) => {
  return http.delete(`cart/${id}`);
}
const incCartItemQty = (id) => {
  return http.put(`cart/${id}/quantity/increment`);
}
const decCartItemQty = (id) => {
  return http.put(`cart/${id}/quantity/decrement`);
}
const addToCart = (data) => {
  return http.post('cart/additem', data);
}
const getUserCartProduct = (id) => {
  return http.get(`cart/product/${id}`);
}

const cartService = {
  addCartItems,
  getUserCart,
  deleteCartItem,
  incCartItemQty,
  decCartItemQty,
  addToCart,
  getUserCartProduct,
};

export default cartService;