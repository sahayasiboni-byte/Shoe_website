import React, { useState } from "react";
import shopemodule from "./Shop.module.css";
import { Link } from "react-router-dom";
import sellermodule from '../../Section/HomeSection/SellerSection/Seller.module.css'

import shoe1 from "../../assets/new1.png";
import shoe2 from "../../assets/new2.png";
import shoe3 from "../../assets/new3.png";
import shoe4 from "../../assets/new4.png";
import shoe5 from "../../assets/new5.png";
import shoe6 from "../../assets/new6.png";
import shoe7 from "../../assets/new7.png";
import shoe8 from "../../assets/new8.png";
import shoe9 from "../../assets/boots1.png";
import shoe10 from "../../assets/formal.png";
import shoe11 from "../../assets/high-neck.png";
import shoe12 from "../../assets/loafer.png";
import shoe13 from "../../assets/neck.png";
import shoe14 from "../../assets/sports.png";

const ShopSecton = () => {

   const [setMenuOpen] = useState(false);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // change to "smooth" if needed
      })
      setMenuOpen(false)
    }
  
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [activePrice, setActivePrice] = useState("All");
  const [activeColor, setActiveColor] = useState("All");

  // Mobile dropdown state
  const [showCategory, setShowCategory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);

  const products = [
    { id: 1, name: "Stride Sneakers", price: 435, oldPrice: 450, rating: 4.3, category: "Sneakers", color: "White", image: shoe1 },
    { id: 2, name: "Thrivo Oxford Shoe", price: 400, oldPrice: 450, rating: 4.6, category: "Oxford", color: "Black", image: shoe2 },
    { id: 3, name: "Strideon Boot", price: 400, oldPrice: 450, rating: 4.2, category: "Boots", color: "Brown", image: shoe3 },
    { id: 4, name: "Running Shoe", price: 350, oldPrice: 420, rating: 4.1, category: "Running", color: "Blue", image: shoe4 },
    { id: 5, name: "Casual Sneaker", price: 390, oldPrice: 460, rating: 4.4, category: "Sneakers", color: "White", image: shoe5 },
    { id: 6, name: "Formal Shoe", price: 420, oldPrice: 480, rating: 4.5, category: "Formal", color: "Black", image: shoe6 },
    { id: 7, name: "High Neck Boot", price: 460, oldPrice: 520, rating: 4.6, category: "High Neck", color: "Brown", image: shoe7 },
    { id: 8, name: "Loafer Shoe", price: 310, oldPrice: 360, rating: 4.0, category: "Loafers", color: "Tan", image: shoe8 },
    { id: 9, name: "Sports Shoe", price: 380, oldPrice: 430, rating: 4.2, category: "Sports Shoe", color: "Red", image: shoe9 },
    { id: 10, name: "Oxford Classic", price: 410, oldPrice: 470, rating: 4.3, category: "Oxford", color: "Black", image: shoe10 },
    { id: 11, name: "Neck Shoe", price: 360, oldPrice: 410, rating: 4.1, category: "High Neck", color: "Grey", image: shoe11 },
    { id: 12, name: "Street Sneaker", price: 395, oldPrice: 455, rating: 4.4, category: "Sneakers", color: "White", image: shoe12 },
    { id: 13, name: "Daily Wear", price: 330, oldPrice: 390, rating: 4.0, category: "Running", color: "Blue", image: shoe13 },
    { id: 14, name: "Training Shoe", price: 370, oldPrice: 430, rating: 4.3, category: "Sports Shoe", color: "Black", image: shoe14 },
  ];

  const categories = [
    "All Products",
    "Sneakers",
    "Boots",
    "Formal",
    "Running",
    "Oxford",
    "Sports Shoe",
    "High Neck",
    "Loafers",
  ];

  const prices = [
    { label: "All", min: 0, max: Infinity },
    { label: "$0 - $100", min: 0, max: 100 },
    { label: "$101 - $200", min: 101, max: 200 },
    { label: "$201 - $300", min: 201, max: 300 },
    { label: "$301 - $400", min: 301, max: 400 },
    { label: "$401 - $500", min: 401, max: 500 },
  ];

  const colors = ["All", "Blue", "Black", "White", "Brown", "Red", "Grey"];

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      activeCategory === "All Products" || item.category === activeCategory;

    const priceRange = prices.find((p) => p.label === activePrice);
    const priceMatch =
      !priceRange || (item.price >= priceRange.min && item.price <= priceRange.max);

    const colorMatch =
      activeColor === "All" || item.color === activeColor;

    return categoryMatch && priceMatch && colorMatch;
  });

  return (
    <>
      <div className={shopemodule.shopcointainer}>
        <h1>Explore Our Shop</h1>
      </div>

      {/* MOBILE FILTER BAR */}
      <div className={shopemodule.mobileFilters}>
        <div
          className={shopemodule.filterBtn}
          onClick={() => {
            setShowCategory(!showCategory);
            setShowPrice(false);
            setShowColor(false);
          }}
        >
          Category ▼
          {showCategory && (
            <div className={shopemodule.dropdown}>
              {categories.map((cat) => (
                <p key={cat} onClick={() => {
                  setActiveCategory(cat);
                  setShowCategory(false);
                }}>
                  {cat}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className={shopemodule.filterBtn}
          onClick={() => {
            setShowPrice(!showPrice);
            setShowCategory(false);
            setShowColor(false);
          }}
        >
          Price Ranges ▼
          {showPrice && (
            <div className={shopemodule.dropdown}>
              {prices.map((p) => (
                <p key={p.label} onClick={() => {
                  setActivePrice(p.label);
                  setShowPrice(false);
                }}>
                  {p.label}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className={shopemodule.filterBtn}
          onClick={() => {
            setShowColor(!showColor);
            setShowCategory(false);
            setShowPrice(false);
          }}
        >
          Colors ▼
          {showColor && (
            <div className={shopemodule.dropdown}>
              {colors.map((color) => (
                <p key={color} onClick={() => {
                  setActiveColor(color);
                  setShowColor(false);
                }}>
                  {color}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={shopemodule.shopWrapper}>
        {/* DESKTOP SIDEBAR */}
        <div className={shopemodule.sidebar}>
          <h3>Categories</h3>
          {categories.map((cat) => (
            <label key={cat} className={shopemodule.categoryItem}>
              <input
                type="radio"
                checked={activeCategory === cat}
                onChange={() => setActiveCategory(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}

          <h3>Price</h3>
          {prices.map((p) => (
            <label key={p.label} className={shopemodule.categoryItem}>
              <input
                type="radio"
                checked={activePrice === p.label}
                onChange={() => setActivePrice(p.label)}
              />
              <span>{p.label}</span>
            </label>
          ))}

          <h3>Color</h3>
          {colors.map((color) => (
            <label key={color} className={shopemodule.categoryItem}>
              <input
                type="radio"
                checked={activeColor === color}
                onChange={() => setActiveColor(color)}
              />
              <span>{color}</span>
            </label>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className={shopemodule.productGrid}>
          {filteredProducts.map((item) => (
            <Link to="/shoe" className={sellermodule.link} onClick={scrollToTop}>
            <div className={shopemodule.productCard} key={item.id}>
              <div className={shopemodule.imageWrapper}>
                <img src={item.image} alt={item.name} />
              </div>
              <h4>{item.name}</h4>
              <div className={shopemodule.price}>
                <span>${item.price}.00 USD</span>
                <del>${item.oldPrice}.00 USD</del>
              </div>
              <div className={shopemodule.rating}>⭐ {item.rating}</div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopSecton;
