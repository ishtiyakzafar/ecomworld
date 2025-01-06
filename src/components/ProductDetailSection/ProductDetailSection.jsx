import React, { useState } from "react";
import s from "./ProductDetailSection.module.scss";
import { GiShoppingBag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from 'react-redux';
import { actionAddToCart, actionAddToWishlist } from "../../store/productSlice";
import { toast } from "react-toastify";
import cartService from "../../services/cart";
import wishlistService from "../../services/wishlist";


const ProductDetailSection = ({ details }) => {
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);


  const handleAddTocart = async () => {
    if (size) {
      try {
        isLoggedIn && await cartService.addToCart({ productId: details._id, size });
        dispatch(actionAddToCart({ product: details, size }));
        toast.success("Product added to your cart");
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error('Please select a size');
    }
  }

  const handleAddToWishlist = async () => {
    if (!isLoggedIn) {
      return toast.error("Please login to add to wishlist");
    }

    try {
      const res = await wishlistService.addItemToWhislist({ productId: details._id });
      if (res.success) {
        dispatch(actionAddToWishlist(details));
        toast.success('Product added to your wishlist');
      } else {
        toast.error('Product already added to your wishlist');
      }
    } catch (error) {
      toast.error(error);
    }
  }


  return (
    <div className={s.productInfo}>
      <div className={s.basicInfo}>
        <h1>{details.title}</h1>
        <p>{details.brand}</p>
        <h4>
          ₹{details.discountedPrice} <small>₹{details.price}</small>{" "}
          <span>{details.discountPercent}% Off</span>
        </h4>
      </div>

      <div className={s.productRating}>
        <StarRatings
          rating={2.3}
          starRatedColor="yellow"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="1px"
        />
        <p>
          142536 Rating <a href="#">3625 review</a>
        </p>
      </div>

      <div className={s.productSize}>
        <p>
          Size:<span>{size}</span>
        </p>
        <div className={s.sizeOption}>
          {details.size?.map((item) => (
            <div
              onClick={() => setSize(item.name)}
              key={item._id}
              className={`${s.size} ${item.name === size && s.active}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={s.productColor}>
        <p>
          Color: <span>Red</span>
        </p>
      </div>

      <div className={s.productBtn}>
        <button onClick={handleAddTocart} className={s.addToCart}>
          <GiShoppingBag /> Add to Cart
        </button>


        <button onClick={handleAddToWishlist} className={s.addToWishlist}>
          <FaRegHeart /> Wishlist
        </button>

      </div>

      <div className={s.extraInfo}>
        <div className={s.box}>
          <div className={s.icon}>
            <LiaCertificateSolid />
          </div>
          <small>100% Original Products</small>
        </div>
        <div className={s.box}>
          <div className={s.icon}>
            <LiaShippingFastSolid />
          </div>
          <small>Free Shipping*</small>
        </div>
        <div className={s.box}>
          <div className={s.icon}>
            <LiaCertificateSolid />
          </div>
          <small>Easy 15 days return and exchange available</small>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
