import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/product1.jpg';
import img2 from '../../assets/images/product2.jpg';
import img3 from '../../assets/images/product3.jpg';
import img4 from '../../assets/images/product4.jpg';
import img5 from '../../assets/images/product5.jpg';
import img6 from '../../assets/images/product6.jpg';
import img7 from '../../assets/images/product7.jpg';
import img8 from '../../assets/images/product8.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './ProductDetailImage.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



const ProductDetailImage = ({ details }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          details.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          details.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ProductDetailImage;