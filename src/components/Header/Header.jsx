import React from 'react';
import s from "./Header.module.scss";
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from '../../store/authSlice';
import { actionToggleLoginPopup } from '../../store/appSlice';

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header>
      <div className={s.headerLeft}>
        <FaBarsStaggered />
        <Link to='/' className={s.logo}>Ecom<span>World</span></Link>
      </div>

      <ul className={s.menu}>
        <li><Link to='/' href="#">Home <i className="fa-solid fa-chevron-down"></i></Link></li>
        <li><a href="#">Shops <i className="fa-solid fa-chevron-down"></i></a></li>
        <li><Link to='/products' href="#">Products <i className="fa-solid fa-chevron-down"></i></Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>

      <div className={s.headerIcon}>
        {isLoggedIn && <button onClick={() => dispatch(actionLogout())}>logout</button>}
        <IoSearchOutline />
        {!isLoggedIn && <FiUser
          onClick={() => {
            dispatch(actionToggleLoginPopup(true))
            // const body = document.querySelector('body');
            // body.style.overflow = 'hidden';
          }}
        />}
        <Link className={s.wishlistIcon} to='/wishlist'><IoMdHeartEmpty /></Link>
        <Link className={s.cartIcon} to='/cart'><LiaShoppingBagSolid /></Link>
      </div>
    </header>
  )
};

export default Header;