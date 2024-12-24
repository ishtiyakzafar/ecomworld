import React, { useEffect, useState } from 'react';
import s from "./HomePage.module.scss";
import SavingZoneSection from '../../components/SavingZoneSection/SavingZoneSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import OnSaleSection from '../../components/OnSaleSection/OnSaleSection';
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection';
import NewArrivalsSection from '../../components/NewArrivalsSection/NewArrivalsSection';
import CategorySection from '../../components/CategorySection/CategorySection';
import HeroSection from '../../components/HeroSection/HeroSection';
import productService from '../../services/product';


const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await productService.getProductsByType();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <CategorySection />
      <NewArrivalsSection products={products} />
      <BestSellerSection products={products} />
      <OnSaleSection products={products} />
      <SavingZoneSection />
      <ServiceSection />
    </>
  )
};

export default HomePage;