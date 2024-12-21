import http from "./http";

const getAllProducts = () => {
  return http.get('products');
}
const register = (data) => {
  return http.post('users/register', data);
}

const productService = {
  getAllProducts,
  register,
};

export default productService;