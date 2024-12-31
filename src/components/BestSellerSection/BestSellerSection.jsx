import React, { useEffect, useState } from 'react';
import s from "./BestSellerSection.module.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import ProductCard from '../ProductCard/ProductCard';
import productService from '../../services/product';

const BestSellerSection = () => {
  const [products, setProducts] = useState([]);

  const fetchBestSellerProduct = async () => {
    try {
      const products = await productService.getBestSellerProduct();
      setProducts(products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBestSellerProduct()
  }, [])

  return (
    <div className={s.bestSeller}>
      <div className='container'>
        <SectionHeading title='Best Seller' />
        <div className={s.bestSellerSection}>
          {
            products.slice(0, 4).map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default BestSellerSection;