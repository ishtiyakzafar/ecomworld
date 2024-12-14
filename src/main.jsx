import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Loader from "./components/Loader/Loader.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound.jsx"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage/ProductDetailPage.jsx"));
import product1 from './assets/images/product1.jpg';
import product2 from './assets/images/product2.jpg';
import product3 from './assets/images/product3.jpg';
import product4 from './assets/images/product4.jpg';
import product5 from './assets/images/product5.jpg';
import product6 from './assets/images/product6.jpg';
import product7 from './assets/images/product7.jpg';
import product8 from './assets/images/product8.jpg';
import product9 from './assets/images/product9.jpg';
import product10 from './assets/images/product10.jpg';
import product11 from './assets/images/product11.jpg';
import product12 from './assets/images/product12.png';
import product13 from './assets/images/product13.png';
import product14 from './assets/images/product14.jpg';
import product15 from './assets/images/product15.png';
import product16 from './assets/images/product16.jpg';
import product17 from './assets/images/product17.jpg';
import product18 from './assets/images/product18.jpg';
import product19 from './assets/images/product19.jpg';
import product20 from './assets/images/product20.jpg';
import product21 from './assets/images/product21.jpg';
import product22 from './assets/images/product22.jpg';
import product23 from './assets/images/product23.jpg';
import product24 from './assets/images/product24.jpg';
import product25 from './assets/images/product25.jpg';
const WishListPage = lazy(() => import("./pages/WishListPage/WishListPage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage.jsx"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs.jsx"));



const products = [
  {
    _id: 1,
    img: product1,
    title: "Ribbed Tank Top",
    price: "750.00",
  },
  {
    _id: 2,
    img: product2,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "250.00",
  },
  {
    _id: 3,
    img: product3,
    title: "Ribbed Modal T-shirt",
    price: "650.00",
  },
  {
    _id: 4,
    img: product4,
    title: "Oversized Printed T-shirt",
    price: "750.00",
  },
  {
    _id: 5,
    img: product5,
    title: "Loose Fit Sweatshirt",
    price: "350.00",
  },
  {
    _id: 6,
    img: product6,
    title: "V-neck Linen T-shirt",
    price: "50.00",
  },
  {
    _id: 7,
    img: product7,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "950.00",
  },
  {
    _id: 8,
    img: product8,
    title: "Stylish T-shirt",
    price: "450.00",
  },
  {
    _id: 9,
    img: product9,
    title: "Ribbed Tank Top",
    price: "750.00",
  },
  {
    _id: 10,
    img: product10,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "250.00",
  },
  {
    _id: 11,
    img: product11,
    title: "Ribbed Modal T-shirt",
    price: "650.00",
  },
  {
    _id: 12,
    img: product12,
    title: "Oversized Printed T-shirt",
    price: "750.00",
  },
  {
    _id: 13,
    img: product13,
    title: "Loose Fit Sweatshirt",
    price: "350.00",
  },
  {
    _id: 14,
    img: product14,
    title: "V-neck Linen T-shirt",
    price: "50.00",
  },
  {
    _id: 15,
    img: product15,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "950.00",
  },
  {
    _id: 16,
    img: product16,
    title: "Stylish T-shirt",
    price: "450.00",
  },
  {
    _id: 17,
    img: product17,
    title: "Ribbed Tank Top",
    price: "750.00",
  },
  {
    _id: 18,
    img: product18,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "250.00",
  },
  {
    _id: 19,
    img: product19,
    title: "Ribbed Modal T-shirt",
    price: "650.00",
  },
  {
    _id: 20,
    img: product20,
    title: "Oversized Printed T-shirt",
    price: "750.00",
  },
  {
    _id: 21,
    img: product21,
    title: "Loose Fit Sweatshirt",
    price: "350.00",
  },
  {
    _id: 22,
    img: product22,
    title: "V-neck Linen T-shirt",
    price: "50.00",
  },
  {
    _id: 23,
    img: product23,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "950.00",
  },
  {
    _id: 24,
    img: product24,
    title: "Stylish T-shirt",
    price: "450.00",
  },
  {
    _id: 25,
    img: product25,
    title: "Ribbed Tank Top",
    price: "750.00",
  },
];


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <HomePage products={products} />,
      },
      {
        path: "products",
        element: <ProductPage products={products} />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage similarProducts={products} />,
      },
      {
        path: "cart",
        element: <CartPage cartProducts={products} />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "wishlist",
        element: <WishListPage wishlistProducts={products} />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
);
