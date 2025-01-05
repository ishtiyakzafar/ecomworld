import React from 'react';
import s from "./OrderSummary.module.scss";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate('/login?page=cart');
    }
  }

  return (
    <div className={s.orderSummary}>
      <h5>Order Summary</h5>
      <div className={s.orderSummaryItem}>
        <p>Subtotal</p>
        <p>₹600</p>
      </div>
      <div className={s.orderSummaryItem}>
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className={s.orderSummaryItem}>
        <p>Total</p>
        <p>₹600</p>
      </div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  )
};

export default OrderSummary;