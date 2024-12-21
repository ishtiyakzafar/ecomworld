import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar_box'>
      <div className='sidebar'>
        <ul>
          <li><Link to="/admin">Products</Link></li>
          <li><Link to="/admin/add-product">Add Products</Link></li>
          <li><a href="#">Mobiles</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;