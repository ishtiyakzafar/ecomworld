import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductDetailImages.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";
import product9 from "../../assets/images/product9.jpg";
import product10 from "../../assets/images/product10.jpg";
import product11 from "../../assets/images/product11.jpg";
import product12 from "../../assets/images/product12.png";
import product13 from "../../assets/images/product13.png";
import product14 from "../../assets/images/product14.jpg";
import product15 from "../../assets/images/product15.png";
import product16 from "../../assets/images/product16.jpg";
import product17 from "../../assets/images/product17.jpg";
import product18 from "../../assets/images/product18.jpg";
import product19 from "../../assets/images/product19.jpg";
import product20 from "../../assets/images/product20.jpg";
import product21 from "../../assets/images/product21.jpg";
import product22 from "../../assets/images/product22.jpg";
import product23 from "../../assets/images/product23.jpg";
import product24 from "../../assets/images/product24.jpg";
import product25 from "../../assets/images/product25.jpg";

const images = [
  {
    _id: 1,
    img: product1,
  },
  {
    _id: 2,
    img: product2,
  },
  {
    _id: 3,
    img: product3,
  },
  {
    _id: 4,
    img: product4,
  },
  {
    _id: 5,
    img: product5,
  },
  {
    _id: 6,
    img: product6,
  },
  {
    _id: 7,
    img: product7,
  },
  {
    _id: 8,
    img: product8,
  },
  {
    _id: 9,
    img: product9,
  },
  {
    _id: 10,
    img: product10,
  },
  {
    _id: 11,
    img: product11,
  },
  {
    _id: 12,
    img: product12,
  },
  {
    _id: 13,
    img: product13,
  },
  {
    _id: 14,
    img: product14,
  },
  {
    _id: 15,
    img: product15,
  },
  {
    _id: 16,
    img: product16,
  },
  {
    _id: 17,
    img: product17,
  },
  {
    _id: 18,
    img: product18,
  },
  {
    _id: 19,
    img: product19,
  },
  {
    _id: 20,
    img: product20,
  },
  {
    _id: 21,
    img: product21,
  },
  {
    _id: 22,
    img: product22,
  },
  {
    _id: 23,
    img: product23,
  },
  {
    _id: 24,
    img: product24,
  },
  {
    _id: 25,
    img: product25,
  },
];

const ProductDetailImages = ({ details }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="productDetailImages">
      <div className="row g-4">
        <div className="col-xl-2 col-12 order-xl-0 order-1">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            direction={width > 1200 ? "vertical" : "horizontal"}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((item) => (
              <SwiperSlide key={item._id}>
                <img src={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-xl-10 col-12">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((item) => (
              <SwiperSlide key={item._id}>
                <img src={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImages;
