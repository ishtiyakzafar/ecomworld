import http from "./http";

const getAllProducts = () => {
  return http.get('products');
}
const createProduct = (data) => {
  return http.post('products', data);
}
const productDetails = (id) => {
  return http.get(`products/${id}`);
}
const getProductsByType = () => {
  return http.get('products/by-product-type');
}

const productService = {
  getAllProducts,
  createProduct,
  productDetails,
  getProductsByType,
};

export default productService;