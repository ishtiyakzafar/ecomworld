import React from 'react';
import s from "./ProductDetailPage.module.scss";
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProductDetailImage from '../../components/ProductDetailImage/ProductDetailImage';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductDetailsTags from '../../components/ProductDetailsTags/ProductDetailsTags';

const ProductDetailPage = ({ similarProducts }) => {
  return (
    <div className='container'>
      <div className={s.productDetailBox}>
        <div className={s.breadcrum}>
          <Link to='/'>Home</Link> / <Link to='/products'>Products</Link> / <span>Product Detail</span>
        </div>

        <div className={s.productDetail}>
          <div className='row g-4 g-md-5'>
            <div className='col-md-12 col-lg-6 col-xl-5'>
              <ProductDetailImage />
            </div>
            <div className='col-md-12 col-lg-6'>
              <ProductDetails />
            </div>
          </div>
        </div>

        <ProductDetailsTags />

        <div className={s.productDescription}>
          <SectionHeading title='Description' />
          <p>Stay stylish and comfortable with the Roadster Women's Casual Hoodie. Crafted from premium-quality fabric, this hoodie offers a relaxed fit and cozy warmth, making it perfect for everyday wear. Designed with a trendy look, it features a drawstring hood, ribbed cuffs, and a spacious front pocket for added convenience. Pair it with jeans or joggers for a versatile and effortless outfit. Stay stylish and comfortable with the Roadster Women's Casual Hoodie. Crafted from premium-quality fabric, this hoodie offers a relaxed fit and cozy warmth, making it perfect for everyday wear. Designed with a trendy look, it features a drawstring hood, ribbed cuffs, and a spacious front pocket for added convenience. Pair it with jeans or joggers for a versatile and effortless outfit.</p>
        </div>
        <div className={s.similarProduct}>
          <SectionHeading title='Similar Products' />
          <div className={s.products}>
            {
              similarProducts.slice(0, 4).map((item) => (
                <ProductCard key={item._id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetailPage;