import React, { useEffect } from 'react';
import './WishListPage.scss';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useDispatch, useSelector } from 'react-redux';
import { actionRemoveFromWishlist } from '../../store/productSlice';

const WishListPage = () => {
  const { wishlist } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='wishlistPage'>
        <SectionHeading title='My Wishlist' />
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Product Detail</th>
                <th>Price</th>
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
                        <img src='https://ecomusnext-themesflat.vercel.app/images/products/orange-1.jpg' alt="img" />
                        <div className='productInfo'>
                          <h6>{item.title}</h6>
                          <p>{item.color} / M</p>
                          <small onClick={() => dispatch(actionRemoveFromWishlist(item._id))}>Remove</small>
                        </div>
                      </div>
                    </td>
                    <td>₹{item.discountedPrice}</td>
                    <td>In-stock</td>
                    <td>
                      <button>Add to cart</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default WishListPage;