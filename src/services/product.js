import http from "./http";

const getAllProducts = () => {
  return http.get('products');
}

const getNewArrivalProduct = () => {
  return http.get('products/new_arrival');
}

const getOnSaleProduct = () => {
  return http.get('products/on_sale');
}

const getBestSellerProduct = () => {
  return http.get('products/best_seller');
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
  getNewArrivalProduct,
  getOnSaleProduct,
  getBestSellerProduct,
  createProduct,
  productDetails,
  getProductsByType,
};

export default productService;