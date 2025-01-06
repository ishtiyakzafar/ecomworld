import React, { useEffect, useState } from 'react';
import './WishListPage.scss';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useDispatch, useSelector } from 'react-redux';
import wishlistService from '../../services/wishlist';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { actionRemoveFromWishlist, actionSetWishlist } from '../../store/productSlice';
import MoveToCartModal from '../../components/MoveToCartModal/MoveToCartModal';

const WishListPage = () => {
  const { wishlist } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);


  const fetchUserWishlist = async () => {
    try {
      const res = await wishlistService.getWishlist();
      dispatch(actionSetWishlist(res));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserWishlist();
    }
  }, [])

  const deleteItemFromWishlist = async (id) => {
    try {
      const res = await wishlistService.deleteItemFromWishlist(id);
      dispatch(actionRemoveFromWishlist(id));
      toast.error('Product remove from your wishlist');
    } catch (error) {
      toast.error(res.message);
    }
  }

  const handleMoveToCart = (item) => {
    // dispatch(actionMoveToCart(item))
  }

  return (
    <div className='container'>
      <div className='wishlistPage'>
        <SectionHeading title='My Wishlist' />
        {wishlist.length > 0 ?
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Product Detail</th>
                  <th>Unit Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  wishlist.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <div className='product'>
                          <Link to={`/product/${item._id}`}>
                            <img src='https://ecomusnext-themesflat.vercel.app/images/products/orange-1.jpg' alt="img" />
                          </Link>
                          <div className='productInfo'>
                            <h6>{item.title}</h6>
                            <p>{item.color}</p>
                            <small onClick={() => deleteItemFromWishlist(item._id)}>Remove</small>
                          </div>
                        </div>
                      </td>
                      <td className='price'>
                        ₹{item.discountedPrice} <small>₹{item.price}</small> <span>{item.discountPercent}% Off</span>
                      </td>
                      <td>{item.quantity > 0 ? 'In-stock' : 'Out of stock'}</td>
                      <td>
                        <MoveToCartModal item={item} />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          :
          <p>No product found in your wishlist</p>
        }
      </div>
    </div>
  )
};

export default WishListPage;