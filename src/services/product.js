import http from "./http";

const getAllProducts = () => {
  return http.get('products');
}
const createProduct = (data) => {
  return http.post('products', data);
}

const productService = {
  getAllProducts,
  createProduct,
};

export default productService;