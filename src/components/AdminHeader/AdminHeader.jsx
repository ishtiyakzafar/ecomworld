import React from 'react';
import './AdminHeader.scss';
// import userImg from '../../assets/images/profile.jpeg';
import { useDispatch } from 'react-redux';
// import { actionLogout } from '../../store/userSlice';
// import AddProduct from '../AddProduct/AddProduct';

const AdminHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className='header'>
      {/* <AddProduct /> */}
      <h5>Products</h5>

      <div className='profile'>
        <div className='user_name'>
          <h6>John Doe</h6>
        </div>
        <div className="dropdown">
          <div className='user_img' data-bs-toggle="dropdown" aria-expanded="false">
            {/* <img src={userImg} alt='user' /> */}
          </div>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li className="dropdown-item">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default AdminHeader;