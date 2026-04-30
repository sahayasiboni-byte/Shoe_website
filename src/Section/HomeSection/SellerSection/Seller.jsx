import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sellermodule from "../SellerSection/Seller.module.css";
import axios from "axios";

const Seller = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios
      .get("https://shoe-backend-oz5k.onrender.com/api/img/last")  // make sure this API returns 8 products
      .then((res) => {
        setSeller(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
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
    <div className={sellermodule.sellercotainer}>
      <h1 data-aos="fade-up">Best Sellers</h1>

      <div data-aos="fade-up" className={sellermodule.sellergrid}>
        {seller.map((item) => (
          <Link
            to={`/shoe/${item.id}`}
            className={sellermodule.link}
            onClick={scrollToTop}
            key={item.id}
          >
            <div className={sellermodule.card}>
              
              <div className={sellermodule.imageBox}>
                <img src={item.productimage} alt={item.productname} />
              </div>

              <h3>{item.productname}</h3>

              {item.rating && (
                <p className={sellermodule.rating}>
                  ⭐ {item.rating}
                </p>
              )}

              <div className={sellermodule.priceBox}>
                <span className={sellermodule.newPrice}>
                  ₹ {item.currentprice}.00 USD
                </span>

                {item.previousprice && (
                  <del className={sellermodule.oldPrice}>
                    ₹ {item.previousprice}.00 USD
                  </del>
                )}
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Seller;