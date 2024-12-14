import React, { useState } from 'react';
import s from "./ProductPage.module.scss";
import ProductCard from '../../components/ProductCard/ProductCard';
import { CiFilter } from "react-icons/ci";
import { LiaAngleDownSolid } from "react-icons/lia";
import ProductFilter from '../../components/ProductFilter/ProductFilter';

const ProductPage = ({ products }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleShowDrawer = () => {
    if (!showDrawer) {
      setShowDrawer(true);
      const body = document.querySelector('body');
      body.style.overflow = 'hidden';
    } else {
      setShowDrawer(false);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    }
  }

  return (
    <div className='container'>
      {showDrawer && <ProductFilter handleShowDrawer={handleShowDrawer} />}
      <div className={s.productPage}>
        <div className={s.productHeader}>
          <div onClick={handleShowDrawer} className={s.productFilterBtn}>
            <CiFilter /><span>FILTER</span>
          </div>
          <div className={s.productSorting}>
            <div className="dropdown">
              <div className={s.selectDropdown} data-bs-toggle="dropdown" aria-expanded="false">
                <span>Sort</span> <LiaAngleDownSolid />
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Alphabetically A-Z</li>
                <li className="dropdown-item">Alphabetically Z-A</li>
                <li className="dropdown-item">Price, low to high</li>
                <li className="dropdown-item">Price, high to low</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.productList}>
          {
            products.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </div >
  )
};

export default ProductPage;