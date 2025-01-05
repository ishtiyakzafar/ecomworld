import React, { useEffect } from 'react';
import './WishListPage.scss';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddtoCartFromWishlist, actionRemoveFromWishlist, actionSetWishlist } from '../../store/productSlice';
import wishlistService from '../../services/wishlist';

const WishListPage = () => {
  const { wishlist } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchUserWishlist = async () => {
    try {
      const res = await wishlistService.getWishlist();
      dispatch(actionSetWishlist(res));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserWishlist()
  }, [])

  const deleteItemFromWishlist = async (id) => {
    try {
      const res = await wishlistService.deleteItemFromWishlist(id);
      dispatch(actionRemoveFromWishlist(id))
    } catch (error) {
      console.log(error)
    }
  }

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
                          <p>{item.color}</p>
                          <small onClick={() => deleteItemFromWishlist(item._id)}>Remove</small>
                        </div>
                      </div>
                    </td>
                    <td>₹{item.discountedPrice}</td>
                    <td>In-stock</td>
                    <td>
                      <button onClick={() => dispatch(actionAddtoCartFromWishlist(item))}>Add to cart</button>
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