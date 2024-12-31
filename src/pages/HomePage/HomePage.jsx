import React, { useEffect, useState } from 'react';
import s from "./HomePage.module.scss";
import SavingZoneSection from '../../components/SavingZoneSection/SavingZoneSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import OnSaleSection from '../../components/OnSaleSection/OnSaleSection';
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection';
import NewArrivalsSection from '../../components/NewArrivalsSection/NewArrivalsSection';
import CategorySection from '../../components/CategorySection/CategorySection';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <NewArrivalsSection />
      <BestSellerSection />
      <OnSaleSection />
      <SavingZoneSection />
      <ServiceSection />
    </>
  )
};

export default HomePage;