import React from 'react';
import './AdminHeader.scss';
import userImg from '../../assets/icons/profile.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from '../../store/userSlice';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div className='header'>
      <h5>Products</h5>

      <div className='profile'>
        <div className='user_name'>
          <h6>{user.name}</h6>
        </div>
        <div className="dropdown">
          <div className='user_img' data-bs-toggle="dropdown" aria-expanded="false">
            <img src={userImg} alt='user' />
          </div>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li onClick={() => dispatch(actionLogout())} className="dropdown-item">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default AdminHeader;