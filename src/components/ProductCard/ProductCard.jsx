import React from "react";
import s from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import wishlistService from "../../services/wishlist";
import { toast } from "react-toastify";
import { actionAddToWishlist } from "../../store/productSlice";


const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);


  const addToWishlist = async () => {
    if (!isLoggedIn) {
      return toast.error("Please login to add to wishlist");
    }

    try {
      const res = await wishlistService.addItemToWhislist({ productId: item._id });
      if (res.success) {
        dispatch(actionAddToWishlist(item));
        toast.success('Product added to your wishlist');
      } else {
        toast.error('Product already added to your wishlist');
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className={s.productCard}>
      <div className={s.productImg}>
        <div onClick={addToWishlist} className={s.whislist}>
          <i className="fa-regular fa-heart"></i>
        </div>
        <Link to={`/product/${item._id}`}>
          <img
            src={item.imageUrl[0]}
            // src='https://ecomusnext-themesflat.vercel.app/images/products/white-4.jpg'
            alt="img"
          />
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
