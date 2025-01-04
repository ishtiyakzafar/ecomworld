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


const cartService = {
  addCartItems,
  getUserCart,
  deleteCartItem,
};

export default cartService;