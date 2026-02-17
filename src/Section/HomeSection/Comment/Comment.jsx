import React, { useRef } from "react";
import commentstyles from "./Comment.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import shoe1 from "../../../assets/commentimg1.jpg";
import shoe2 from "../../../assets/commentimg2.jpg";
import shoe3 from "../../../assets/commentimg3.png";
import shoe4 from "../../../assets/commentimg4.png";

import avatar1 from "../../../assets/human1.svg";
import avatar2 from "../../../assets/human2.png";
import avatar3 from "../../../assets/human3.png";
import avatar4 from "../../../assets/human4.svg";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    image: shoe1,
    text:
      "I’ve never worn shoes this stylish that also feel like walking on clouds. The quality is top-notch, and I get compliments everywhere I go!",
    name: "Harper Jackson",
    avatar: avatar1,
    rating: 5,
  },
  {
    image: shoe2,
    text:
      "Finding shoes that fit well is a struggle for me. But here, the size guide was spot on and the shoes feel custom-made.",
    name: "Mason Jack",
    avatar: avatar2,
    rating: 5,
  },

  {
    image: shoe3,
    text:
      "Finding shoes that fit well is a struggle for me. But here, the size guide was spot on and the shoes feel custom-made.",
    name: "Mason Jack",
    avatar: avatar3,
    rating: 5,
  },

  {
    image: shoe4,
    text:
      "Finding shoes that fit well is a struggle for me. But here, the size guide was spot on and the shoes feel custom-made.",
    name: "Mason Jack",
    avatar: avatar4,
    rating: 5,
  },
];

const Comment = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={commentstyles.wrapper}>
      
      {/* Header + Arrows (same line) */}
      <div className={commentstyles.header}>
        <h1 data-aos="fade-up">What People Says</h1>

        <div className={commentstyles.arrows}>
          <button ref={prevRef} className={commentstyles.arrowBtn}>←</button>
          <button ref={nextRef} className={commentstyles.arrowBtn}>→</button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
      data-aos="fade-up"
        modules={[Navigation]}
        className={commentstyles.commentSwiper}
        loop={true}
        spaceBetween={24}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
    0: {
      slidesPerView: 1,
      enabled: false,          // 🔥 disables slider on mobile
    },
    768: {
      slidesPerView: 1,
      enabled: true,
    },
    1024: {
      slidesPerView: 2,
      enabled: true,
    },
  }}
>
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={commentstyles.slide}>

              {/* Image */}
              <div className={commentstyles.imageCard}>
                <img src={item.image} alt="shoe" />
              </div>

              {/* Text */}
              <div className={commentstyles.textCard}>
                <p className={commentstyles.quote}>“{item.text}”</p>

                <div className={commentstyles.user}>
                  <img src={item.avatar} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <div className={commentstyles.stars}>
                      {"★".repeat(item.rating)}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
