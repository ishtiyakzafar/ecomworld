import React, { useEffect, useState } from 'react';
import s from "./ProductDetailPage.module.scss";
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProductDetailSection from '../../components/ProductDetailSection/ProductDetailSection';
import ProductDetailsTags from '../../components/ProductDetailsTags/ProductDetailsTags';
import productService from '../../services/product';
import ProductDetailImages from '../../components/ProductDetailImages/ProductDetailImages';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { pathname } = useLocation();

  const fetchProductDetails = async () => {
    try {
      const res = await productService.productDetails(id);
      setDetails(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='container'>
      <div className={s.productDetailBox}>
        <div className={s.breadcrum}>
          <Link to='/'>Home</Link> / <Link to='/products'>Products</Link> / <span>Product Detail</span>
        </div>

        <div className={s.productDetail}>
          <div className='row g-4 g-md-5'>
            <div className='col-md-12 col-lg-6 col-xl-6'>
              <ProductDetailImages details={details} />
            </div>
            <div className='col-md-12 col-lg-6'>
              <ProductDetailSection details={details} />
            </div>
          </div>
        </div>

        <ProductDetailsTags />

        <div className={s.productDescription}>
          <SectionHeading title='Description' />
          <p>{details.description}</p>
        </div>
        <div className={s.similarProduct}>
          <SectionHeading title='Similar Products' />
          <div className={s.products}>
            {/* {
              similarProducts.slice(0, 4).map((item) => (
                <ProductCard key={item._id} item={item} />
              ))
            } */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetailPage;