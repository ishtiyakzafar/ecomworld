import React from 'react';
import s from "./ProductDetails.module.scss";
import { GiShoppingBag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className={s.productInfo}>
      <div className={s.basicInfo}>
        <h1>Roadster</h1>
        <p>Roadster Men's Casual Hoodie</p>
        <h4>₹80 <small>₹100</small></h4>
      </div>
      <div className={s.productSize}>
        <p>Size</p>
        <div className={s.sizeOption}>
          <div className={s.size}>XS</div>
          <div className={s.size}>S</div>
          <div className={s.size}>M</div>
          <div className={s.size}>L</div>
          <div className={s.size}>XL</div>
          <div className={s.size}>XXL</div>
        </div>
      </div>
      <div className={s.productColor}>
        <p>Color</p>
        <div className={s.colorOption}>
          <div style={{ background: 'red' }} className={s.color}></div>
          <div style={{ background: 'blue' }} className={s.color}></div>
          <div style={{ background: 'yellow' }} className={s.color}></div>
          <div style={{ background: 'green' }} className={s.color}></div>
        </div>
      </div>

      <div className={s.productBtn}>
        <Link to='/cart'><button className={s.addToCart}><GiShoppingBag /> Add to Cart</button></Link>
        <Link to='/wishlist'><button className={s.addToWishlist}><FaRegHeart /> Wishlist</button></Link>
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
  )
};

export default ProductDetails;