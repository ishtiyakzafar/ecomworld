import React, { useState } from 'react';
import "./Header.scss";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from '../../store/authSlice';
import userIcon from '../../assets/icons/user.svg';
import { actionSetCart, actionSetWishlist } from '../../store/productSlice';
import { CiLogout } from "react-icons/ci";

const Header = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        <Link to='/login'><FiUser /></Link>
        <Link className='wishlistIcon' to='/wishlist'>
          {user.wishlistCount > 0 && <div className='counter'>{user.wishlistCount}</div>}
          <IoMdHeartEmpty />
        </Link>
        <Link className='cartIcon' to='/cart'>
          {user.cartCount > 0 && <div className='counter'>{user.cartCount}</div>}
          <LiaShoppingBagSolid />
        </Link>

        {isLoggedIn &&
          <>
            <p>Hi, {user.name}</p>

            <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} className="custom_dropdown">
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
                    <LiaShoppingBagSolid /> Order
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
                      dispatch(actionSetWishlist([]));
                      dispatch(actionSetCart([]));
                      if (pathname === '/wishlist' || pathname === '/cart') {
                        navigate('/');
                      }
                    }}
                  >
                    <CiLogout /> Logout
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