import React, { useEffect } from 'react';
import "./CartPage.scss";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useDispatch, useSelector } from 'react-redux';
import { actionDecQty, actionIncQty, actionRemoveFromCart, actionSetCart } from '../../store/productSlice';
import cartService from '../../services/cart';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { actionUpdateCartCount } from '../../store/authSlice';

const CartPage = () => {
  const { cart } = useSelector((state) => state.product);
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const fetchUserCart = async () => {
    try {
      const res = await cartService.getUserCart();
      dispatch(actionSetCart(res));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn && fetchUserCart();
  }, [])

  const deleteCartItem = async (id) => {
    try {
      isLoggedIn && await cartService.deleteCartItem(id);
      dispatch(actionRemoveFromCart(id));
      dispatch(actionUpdateCartCount(user.cartCount - 1));
      toast.error('Product remove from your cart');
    } catch (error) {
      console.log(error)
    }
  }


  const handleIncreaseQty = async (item, quantity) => {
    const leftQty = item.product.size.find((val) => val.name === item.size).quantity;

    if (leftQty > quantity) {
      try {
        isLoggedIn && await cartService.incCartItemQty(item._id);
        dispatch(actionIncQty(item._id));
      } catch (error) {
        console.log(error)
      }
    } else {
      return toast.error('You have already added the maximum quantity to cart');
    }
  }

  const handleDecreaseQty = async (item, quantity) => {
    if (quantity > 1) {
      try {
        isLoggedIn && await cartService.decCartItemQty(item._id);
        dispatch(actionDecQty(item._id));
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <div className='container'>
      <div className='cartPageBox'>
        <SectionHeading title='My Cart' />
        {cart.length > 0 ?
          <div className='cartPage'>
            <div className='cartCard'>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Product Detail</th>
                      <th>Unit Price</th>
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
                            <div className='product'>
                              <Link to={`/product/${item.product._id}`}>
                                <img src='https://ecomusnext-themesflat.vercel.app/images/products/orange-1.jpg' alt="img" />
                              </Link>
                              <div className='productInfo'>
                                <h6>{item.product._id}</h6>
                                <p>{item.product.color} / {item.size}</p>
                                <small onClick={() => deleteCartItem(item._id)}>Remove</small>
                              </div>
                            </div>
                          </td>
                          <td className='price'>
                            ₹{item.product.discountedPrice} <small>₹{item.product.price}</small> <span>{item.product.discountPercent}% Off</span>
                          </td>
                          <td>
                            <div className='quantity'>
                              <span onClick={() => handleIncreaseQty(item, item.quantity)}><IoAddOutline /></span>
                              <p>{item.quantity}</p>
                              <span onClick={() => handleDecreaseQty(item, item.quantity)}><FiMinus /></span>
                            </div>
                          </td>
                          <td>Free</td>
                          <td>
                            ₹{item.product.discountedPrice * item.quantity}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <OrderSummary cart={cart} />
          </div>
          :
          <p>No cart item found</p>
        }
      </div>
    </div>
  )
};

export default CartPage;