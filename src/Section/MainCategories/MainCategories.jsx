import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoriesmodule from "../MainCategories/MainCategories.module.css";
import axios from "axios";

const MainCategories = () => {


  const [categories, setCategories] = useState([]);
  // const [menuopen,setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch API
  useEffect(() => {
    axios.get("https://shoe-backend-oz5k.onrender.com/api/img/get")
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
    behavior: "instant"
  });
};

  return (
    <div className={categoriesmodule.catecontainer}>
      
      {/* Header */}
      <div className={categoriesmodule.header}>
        <h1 data-aos="fade-up">Our Categories</h1>
      </div>

    
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading categories...</p>
      ) : (
        <div className={categoriesmodule.grid} data-aos="fade-up">

          {/* ✅ Dynamic Categories */}
          {categories.length > 0 ? (
            categories.map((item) => (
              
              <Link
                key={item.id}
                to={`/shop?category=${item.id}`}   
                className={categoriesmodule.link}
                onClick={scrollToTop}
              >
                <div className={categoriesmodule.maincard}>
                  
                  <div className={categoriesmodule.card}>
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => e.target.src = "/fallback.png"}
                      style={{
                        width: "100%",
                        // height: "150px",
                        // objectFit: "cover"
                      }}
                    />
                  </div>

                  <p>{item.categories}</p>

                </div>
              </Link>

            ))
          ) : (
            <p>No categories found</p>
          )}

        </div>
      )}
    </div>
  );
};

export default MainCategories;