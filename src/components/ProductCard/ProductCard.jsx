import React from 'react';
import s from "./ProductCard.module.scss";
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {

  return (
    <div className={s.productCard}>
      <div className={s.productImg}>
        <div className={s.whislist}><i className="fa-regular fa-heart"></i></div>
        <Link to='/product/1'>
          <img src={item.image} alt="img" />
        </Link>
      </div>
      <div className={s.productInfo}>
        <h6>{item.name}</h6>
        <p>₹{item.price}</p>
      </div>
    </div>
  )
};

export default ProductCard;