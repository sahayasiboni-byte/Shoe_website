import React, { useRef,useState } from "react";
import categoriesmodule from "../CategoriesSection/Categories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import boot from "../../../assets/boots1.png";
import formal from "../../../assets/formal.png";
import running from "../../../assets/running.png";
import oxfotrd from "../../../assets/oxford.png";
import sneaker from "../../../assets/sneaker.png";
import sport from "../../../assets/sports.png";
import neck from "../../../assets/neck.png";
import loafer from "../../../assets/loafer.png";

import "swiper/css";
import "swiper/css/navigation";

const Categories = () => {

  const [menuOpen, setMenuOpen] = useState(false);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" // change to "smooth" if needed
        })
        setMenuOpen(false)
      }

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div data-aos="fade-up" className={categoriesmodule.catecontainer}>
      {/* Header */}
      <div className={categoriesmodule.header}>
        <h1 data-aos="fade-up">Our Categories</h1>

        <div className={categoriesmodule.arrows}>
          <button ref={prevRef} className={categoriesmodule.arrowBtn}>
            ←
          </button>
          <button ref={nextRef} className={categoriesmodule.arrowBtn}>
            →
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={16}
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
            slidesPerView: 2, // 📱 mobile
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 3, // 📱 tablet
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 4, // 💻 desktop
            spaceBetween: 20,
          },
        }}
      >
        {[
          { img: sneaker, title: "Sneakers" },
          { img: boot, title: "Boots" },
          { img: formal, title: "Formal" },
          { img: running, title: "Running" },
          { img: oxfotrd, title: "Oxford" },
          { img: sport, title: "Sports Shoe" },
          { img: neck, title: "High Neck" },
          { img: loafer, title: "Loafer" },
        ].map((item, index) => (
          <SwiperSlide key={index} className={categoriesmodule.maincard}>
            <Link to="/shop" className={categoriesmodule.link} onClick={scrollToTop}>
            <div className={categoriesmodule.card}>
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
