import React, { useState } from "react";
import s from "./ProductDetails.module.scss";
import { GiShoppingBag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const sizes = [
  { id: 1, size: "S" },
  { id: 2, size: "M" },
  { id: 3, size: "L" },
];

const ProductDetails = ({ details }) => {
  const [size, setSize] = useState("");

  return (
    <div className={s.productInfo}>
      <div className={s.basicInfo}>
        <h1>{details.title}</h1>
        <p>{details.brand}</p>
        <h4>
          ₹{details.discountPrice} <small>₹{details.price}</small>{" "}
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
          {sizes.map((item) => (
            <div
              onClick={() => setSize(item.size)}
              key={item.id}
              className={`${s.size} ${item.size === size && s.active}`}
            >
              {item.size}
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
        <Link to="/cart">
          <button className={s.addToCart}>
            <GiShoppingBag /> Add to Cart
          </button>
        </Link>
        <Link to="/wishlist">
          <button className={s.addToWishlist}>
            <FaRegHeart /> Wishlist
          </button>
        </Link>
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

export default ProductDetails;
