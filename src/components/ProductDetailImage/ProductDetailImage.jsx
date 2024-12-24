import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './ProductDetailImage.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductDetailImage = ({ details }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='productImageSlider'>
      <div className='row g-4'>
        <div className='col-xl-2 col-12 order-xl-0 order-1'>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            direction={width > 1200 ? 'vertical' : 'horizontal'}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {
              details.images?.map((item) => (
                item &&
                <SwiperSlide>
                  <img src={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='col-xl-10 col-12'>
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
              details.images?.map((item) => (
                item &&
                <SwiperSlide>
                  <img src={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImage;