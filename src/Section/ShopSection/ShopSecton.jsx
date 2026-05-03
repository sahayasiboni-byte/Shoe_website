import React, { useState, useEffect } from "react";
import shopemodule from "./Shop.module.css";
import { Link } from "react-router-dom";
import sellermodule from '../../Section/HomeSection/SellerSection/Seller.module.css';
import axios from "axios";


const ShopSecton = () => {

  // const [menuopen,setMenuOpen] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "instant"
  //   });
  //   setMenuOpen(false);
  // };

  const [activeCategory, setActiveCategory] = useState("");
  const [activePrice, setActivePrice] = useState("All");
  const [activeColor, setActiveColor] = useState("All");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // ✅ FIX

  const [showCategory, setShowCategory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);

  // ✅ Fetch categories
  useEffect(() => {
    axios.get("https://shoe-backend-oz5k.onrender.com/api/img/get")
      .then((res) => {
        const uniqueCategories = [
       
          ...new Set(res.data.map(item => item.categories.trim()))
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ Fetch products
  useEffect(() => {
    axios.get(`https://shoe-backend-oz5k.onrender.com/api/img/getproduct?categoryname=${activeCategory}`)
      .then((res) => {
        setProducts(res.data); // ✅ FIX
      })
      .catch((err) => console.error(err));
  }, [activeCategory]);
  

  const prices = [
    { label: "All", min: 0, max: Infinity },
    { label: "$0 - $100", min: 0, max: 100 },
    { label: "$101 - $200", min: 101, max: 200 },
    { label: "$201 - $300", min: 201, max: 300 },
    { label: "$301 - $400", min: 301, max: 400 },
    { label: "$401 - $500", min: 401, max: 500 },
  ];

  const colors = ["All", "Blue", "Black", "White", "Brown", "Red", "Grey"];

  return (
    <>
      <div className={shopemodule.shopcointainer}>
        <h1>Explore Our Shop</h1>
      </div>

      {/* MOBILE FILTER */}
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
              <p onClick={() => {
                  setActiveCategory('');
                  setShowCategory(false);
                }}>All Category</p>
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
          Price ▼
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
          Color ▼
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
        {/* SIDEBAR */}
        <div className={shopemodule.sidebar}>
          <h3>Categories</h3>
           <label  className={shopemodule.categoryItem}>
              <input
                type="radio"
                checked={activeCategory === ''}
                onChange={() => setActiveCategory('')}
              />
              <span>all category</span>
              </label>
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
          {products.map((item) => (
            <Link key={item.id} to={`/shoe/${item.id}`} className={sellermodule.link} >
              <div className={shopemodule.productCard}>
                <div className={shopemodule.imageWrapper}>
                  <img
                    src={item.productimage}
                    alt={item.productname}
                  />
                </div>
                <h4>{item.productname}</h4>
                <div className={shopemodule.price}>
                  <span>${item.currentprice}.00</span>
                  <del>${item.previousprice}.00</del>
                </div>
                <div className={shopemodule.rating}>
                  ⭐ {item.count} Rating
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopSecton;









// FILTER LOGIC FIXED
  // const filteredProducts = products.filter((item) => {

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const res = await axios.get(
  //           `http://127.0.0.1:8000/api/img/getproduct?categoryname=${categories}`,
  //           {
  //             params: {
  //               category:
  //                 activeCategory === "All Products"
  //                   ? ""
  //                   : activeCategory,
  //             },
  //           }
  //         );

  //         setProducts(res.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchProducts();
  //   }, [activeCategory]);

  //   const priceRange = prices.find((p) => p.label === activePrice);
  //   const priceMatch =
  //     !priceRange ||
  //     (item.currentprice >= priceRange.min &&
  //       item.currentprice <= priceRange.max);

  //   const colorMatch =
  //     activeColor === "All" || item.color === activeColor; // (only if backend has color)

  //   return categoryMatch && priceMatch && colorMatch;
  // });
