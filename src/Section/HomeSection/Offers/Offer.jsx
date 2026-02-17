import React from "react";
import styles from "./Offer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import offer1 from "../../../assets/offer-mobile-bg.png";
import offer2 from "../../../assets/Offer-Frame-two.png";
import offer3 from "../../../assets/Offer-Frame-three.png";

const slides = [
  {
    image: offer1,
    badge: "Weekend Offer",
    title: "20% OFF!",
    subtitle: "Summit Sneakers! Hottest Deals Of The Month",
  },
  {
    image: offer2,
    badge: "Weekend Offer",
    title: "15% OFF!",
    subtitle: "TurboTrainers! Grab The Latest Shoes",
  },
  {
    image: offer3,
    badge: "Weekend Offer",
    title: "10% OFF!",
    subtitle: "Refined Classics! Imported From USA",
  },
];

const Offer = () => {
  return (
    <div data-aos="zoom-in" className={styles.offerWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className={styles.offerSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.banner}>
              <img src={slide.image} alt="offer banner" />

              <div className={styles.overlay} />

              <div className={styles.content}>
                <span className={styles.badge}>{slide.badge}</span>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offer;
