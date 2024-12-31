import React, { useEffect, useState } from 'react';
import s from "./NewArrivalsSection.module.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import ProductCard from '../ProductCard/ProductCard';
import productService from '../../services/product';

const NewArrivalsSection = () => {
  const [products, setProducts] = useState([]);

  const fetchNewArrivalProduct = async () => {
    try {
      const products = await productService.getNewArrivalProduct();
      setProducts(products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNewArrivalProduct()
  }, [])

  return (
    <div className={s.newArrivals}>
      <div className='container'>
        <SectionHeading title='New Arrivals' />
        <div className={s.newArrivalsSection}>
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

export default NewArrivalsSection;