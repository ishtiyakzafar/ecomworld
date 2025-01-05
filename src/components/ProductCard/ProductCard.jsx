import React from "react";
import s from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { actionAddToWishlist } from "../../store/productSlice";
import { useDispatch } from 'react-redux';
import wishlistService from "../../services/wishlist";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToWishlist = async () => {
    try {
      const res = await wishlistService.addItemToWhislist({ productId: item._id });
      dispatch(actionAddToWishlist(item));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={s.productCard}>
      <div className={s.productImg}>
        <div onClick={addToWishlist} className={s.whislist}>
          <i className="fa-regular fa-heart"></i>
        </div>
        <Link to={`/product/${item._id}`}>
          <img src='https://ecomusnext-themesflat.vercel.app/images/products/white-4.jpg' alt="img" />
        </Link>
      </div>
      <div className={s.productInfo}>
        <span>{item.brand}</span>
        <h6>{item.title}</h6>
        <p>
          ₹{item.discountedPrice} <small>₹{item.price}</small>{" "}
          <span>{item.discountPercent}% Off</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
