import React from 'react';
import s from "./CartPage.module.scss";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useDispatch, useSelector } from 'react-redux';
import { actionRemoveFromCart } from '../../store/productSlice';

const CartPage = () => {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className={s.cartPageBox}>
        <SectionHeading title='My Cart' />
        <div className={s.cartPage}>
          <div className={s.cartCard}>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Product Detail</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Shipping</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <div className={s.product}>
                            <img src='https://ecomusnext-themesflat.vercel.app/images/products/orange-1.jpg' alt="img" />
                            <div className={s.productInfo}>
                              <h6>{item.title}</h6>
                              <p>{item.color} / M</p>
                              <small onClick={() => dispatch(actionRemoveFromCart(item._id))}>Remove</small>
                            </div>
                          </div>
                        </td>
                        <td>₹{item.price}</td>
                        <td>
                          <div className={s.quantity}>
                            <span><IoAddOutline /></span>
                            <p>5</p>
                            <span><FiMinus /></span>
                          </div>
                        </td>
                        <td>Free</td>
                        <td>₹300</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
};

export default CartPage;