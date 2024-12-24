import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import productService from '../../services/product';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await productService.getAllProducts();
      setProducts(res.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className='productsList'>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item) => (
                <tr>
                  <td className='productImg'>
                    <img src={item.images[0]} alt="img" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.topLevelCategory}</td>
                  <td>₹{item.discountPrice}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity}</td>
                  <td className='tableBtn'>
                    <button className='updBtn me-2'>Update</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Dashboard;