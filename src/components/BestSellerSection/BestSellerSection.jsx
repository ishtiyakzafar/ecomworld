import React from 'react';
import s from "./BestSellerSection.module.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import ProductCard from '../ProductCard/ProductCard';

const BestSellerSection = ({ products }) => {
  return (
    <div className={s.bestSeller}>
      <div className='container'>
        <SectionHeading title='Best Seller' />
        <div className={s.bestSellerSection}>
          {
            products.slice(4, 8).map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default BestSellerSection;