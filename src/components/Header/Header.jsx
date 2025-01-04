import React, { useState } from 'react';
import "./Header.scss";
import { Link, useNavigate } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from '../../store/authSlice';
import { actionToggleLoginPopup } from '../../store/appSlice';
import userIcon from '../../assets/icons/user.svg';


const Header = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className='headerLeft'>
        <FaBarsStaggered />
        <Link to='/' className='logo'>Ecom<span>World</span></Link>
      </div>

      <ul className='menu'>
        <li><Link to='/' href="#">Home <i className="fa-solid fa-chevron-down"></i></Link></li>
        <li><a href="#">Shops <i className="fa-solid fa-chevron-down"></i></a></li>
        <li><Link to='/products' href="#">Products <i className="fa-solid fa-chevron-down"></i></Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>

      <div className='headerIcon'>
        <IoSearchOutline />
        {!isLoggedIn && <FiUser
          onClick={() => {
            dispatch(actionToggleLoginPopup(true))
            // const body = document.querySelector('body');
            // body.style.overflow = 'hidden';
          }}
        />}
        <Link className='wishlistIcon' to='/wishlist'><IoMdHeartEmpty /></Link>
        <Link className='cartIcon' to='/cart'><LiaShoppingBagSolid /></Link>

        {isLoggedIn &&
          <>
            <p>Hi, {user.name}</p>

            <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} class="custom_dropdown">
              <img src={userIcon} alt="userIcon" />
              {showDropdown &&
                <ul>
                  <li
                    onClick={() => {
                      navigate('/wishlist');
                      setShowDropdown(false);
                    }}
                  >
                    <FiUser /> Profile
                  </li>

                  <li
                    onClick={() => {
                      navigate('/wishlist');
                      setShowDropdown(false);
                    }}
                  >
                    <IoMdHeartEmpty /> Order
                  </li>

                  <li
                    onClick={() => {
                      navigate('/wishlist');
                      setShowDropdown(false);
                    }}
                  >
                    <IoMdHeartEmpty /> Wishlist
                  </li>

                  <li
                    onClick={() => {
                      navigate('/cart');
                      setShowDropdown(false);
                    }}
                  >
                    <LiaShoppingBagSolid /> Cart
                  </li>

                  <li
                    onClick={() => {
                      dispatch(actionLogout());
                      setShowDropdown(false);
                    }}
                  >
                    <IoMdHeartEmpty /> Logout
                  </li>
                </ul>
              }
            </div>
          </>
        }
      </div>
    </header>
  )
};

export default Header;