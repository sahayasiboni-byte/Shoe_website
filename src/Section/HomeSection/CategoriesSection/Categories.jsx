import React, { useRef, useState, useEffect } from "react";
import categoriesmodule from "../CategoriesSection/Categories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [menuopen,setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // ✅ Fetch API data
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/img/get")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setMenuOpen(false);
  };

  return (
    <div data-aos="fade-up" className={categoriesmodule.catecontainer}>
      
      {/* Header */}
      <div className={categoriesmodule.header}>
        <h1>Our Categories</h1>

        <div className={categoriesmodule.arrows}>
          <button ref={prevRef} className={categoriesmodule.arrowBtn}>←</button>
          <button ref={nextRef} className={categoriesmodule.arrowBtn}>→</button>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
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
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {/* ✅ Dynamic Data from API */}
          {categories.map((item, index) => (
            <SwiperSlide key={index} className={categoriesmodule.maincard}>
              <Link
                to="/shop"
                className={categoriesmodule.link}
                onClick={scrollToTop}
              >
                <div className={categoriesmodule.card}>
                  <img
                    src={item.image}   // ✅ API image
                    alt={item.categories} // ✅ category name
                  />
                </div>
                <p>{item.categories}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;