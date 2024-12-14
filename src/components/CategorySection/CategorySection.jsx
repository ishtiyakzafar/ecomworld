import React from 'react';
import s from "./CategorySection.module.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
};

const categories = [
  {
    id: 1,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-1.jpg',
    title: 'Women’s',
    items: '21',
  },
  {
    id: 2,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-2.jpg',
    title: 'Men’s',
    items: '9',
  },
  {
    id: 3,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-3.jpg',
    title: 'Jewelry',
    items: '31',
  },
  {
    id: 4,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-4.jpg',
    title: 'Sneakers',
    items: '21',
  },
  {
    id: 5,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-5.jpg',
    title: 'Bags',
    items: '5',
  },
  {
    id: 6,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-6.jpg',
    title: 'Glasses',
    items: '14',
  },
  {
    id: 7,
    img: 'https://ecomusnext-themesflat.vercel.app/images/collections/collection-circle-7.jpg',
    title: 'New arrivals',
    items: '31',
  },
]

const CategorySection = () => {
  return (
    <div className={s.categorySection}>
      <div className='container'>
        <SectionHeading title='Season Collection' />
        <div className="slider-container">
          <Slider {...settings}>
            {
              categories.map((item) => (
                <div key={item.id} className={s.categoryCard}>
                  <div className={s.categoryImg}>
                    <a href="#"><img src={item.img} alt="img" /></a>
                  </div>
                  <a href="#"><h6>{item.title}</h6></a>
                  <p>{item.items} items</p>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default CategorySection;