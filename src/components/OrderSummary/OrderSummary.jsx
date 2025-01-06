import React, { useEffect, useState } from 'react';
import "./OrderSummary.scss";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FiMinus } from "react-icons/fi";

const OrderSummary = ({ cart }) => {

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate('/login?page=cart');
    }
  }

  useEffect(() => {
    let totalPriceValue = 0;
    let totalDiscountedPrice = 0;
    let totalDiscount = 0;

    cart.forEach(element => {
      totalPriceValue += element.product.price * element.quantity;
      totalDiscountedPrice += element.product.discountedPrice * element.quantity;
      totalDiscount += (element.product.price - element.product.discountedPrice) * element.quantity;
    });

    setTotalPrice(totalPriceValue);
    setDiscount(totalDiscount);
    setTotalAmount(totalDiscountedPrice);

  }, [cart])

  return (
    <div className='orderSummary'>
      <h5>Price Details ({cart.length} {`${cart.length > 1 ? 'items' : 'item'}`})</h5>
      <div className='orderSummaryItem'>
        <h6>Price</h6>
        <p>₹{totalPrice}</p>
      </div>
      <div className='orderSummaryItem'>
        <h6>Discount</h6>
        <p className='discount'><FiMinus />₹{discount}</p>
      </div>
      <div className='orderSummaryItem'>
        <h6>Shipping</h6>
        <p className='shipping'>Free</p>
      </div>
      <div className='orderSummaryItem'>
        <h5>Total Amount</h5>
        <h5>₹{totalAmount}</h5>
      </div>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  )
};

export default OrderSummary;