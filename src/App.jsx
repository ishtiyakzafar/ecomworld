import React, { lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPrivateRoutes from "./config/AdminPrivateRoutes.jsx";
import CustomerRoutes from "./config/CustomerRoutes.jsx";
import AdminLayout from "./components/AdminLayout/AdminLayout.jsx";
import CustomerPrivateRoutes from "./config/CustomerPrivateRoutes.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { actionSetCart, actionSetWishlist } from "./store/productSlice.js";
import cartService from "./services/cart.js";
import wishlistService from "./services/wishlist.js";
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound.jsx"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage/ProductDetailPage.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));
const AddProduct = lazy(() => import("./pages/AddProduct/AddProduct.jsx"));
const WishListPage = lazy(() => import("./pages/WishListPage/WishListPage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage.jsx"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const fetchInitialData = async () => {
    try {
      const cart = await cartService.getUserCart();
      dispatch(actionSetCart(cart));
      const wishlist = await wishlistService.getWishlist();
      dispatch(actionSetWishlist(wishlist));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // fetchInitialData();
    }
  }, [isLoggedIn])



  return (
    <Router>
      <Routes>
        {/* CUSTOMER ROUTES */}
        <Route element={<CustomerRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Route>
        </Route>

        <Route element={<CustomerPrivateRoutes />}>
          <Route element={<Layout />}>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<AdminPrivateRoutes />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
};

export default App;