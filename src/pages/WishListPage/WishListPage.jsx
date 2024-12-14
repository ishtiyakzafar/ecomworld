import React from 'react';
import './WishListPage.scss';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const WishListPage = ({ wishlistProducts }) => {
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
                wishlistProducts.slice(0, 3).map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className='product'>
                        <img src={item.img} alt="img" />
                        <div className='productInfo'>
                          <h6>{item.title}</h6>
                          <p>White / M</p>
                        </div>
                      </div>
                    </td>
                    <td>₹{item.price}</td>
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