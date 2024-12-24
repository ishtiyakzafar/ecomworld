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
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await productService.getProductsByType();
      setNewArrivalProducts(res.filter((item) => item.productType === 'newarrival'));
      setBestSellerProducts(res.filter((item) => item.productType === 'bestseller'));
      setOnSaleProducts(res.filter((item) => item.productType === 'onsale'));
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
      <NewArrivalsSection products={newArrivalProducts} />
      <BestSellerSection products={bestSellerProducts} />
      <OnSaleSection products={onSaleProducts} />
      <SavingZoneSection />
      <ServiceSection />
    </>
  )
};

export default HomePage;