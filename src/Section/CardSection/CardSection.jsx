import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import cardmodule from "./Card.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const CardSection = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  const userId = Cookies.get("userid");

  useEffect(() => {
    if (!isOpen || !userId) return;

    axios
      .get(`https://shoe-backend-oz5k.onrender.com/api/getcart/${userId}/`)
      .then((res) => {
        console.log("CART DATA:", res.data);
        setCartItems(res.data.data || []);
      })
      .catch((err) => {
        console.error("Cart Error:", err.response?.data || err);
        setCartItems([]);
      });
  }, [userId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className={cardmodule.overlay} onClick={onClose}>
      <div
        className={cardmodule.cartModal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cardmodule.cartHeader}>
          <h2>Your Cart</h2>
          <button className={cardmodule.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div className={cardmodule.cartBody}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={cardmodule.cartItem}>
                {item.product_image && (
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className={cardmodule.cartImage}
                  />
                )}

                <div className={cardmodule.cartDetails}>
                  <h4>{item.product_name}</h4>
                  <p>Qty: {item.quantity}</p>
                  <p>₹{item.product_price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className={cardmodule.emptyCart}>No items found.</p>
          )}
        </div>

        <Link to="/shop" className={cardmodule.link}>
          <button className={cardmodule.shopBtn}>Shop Now →</button>
        </Link>
      </div>
    </div>
  );
};

export default CardSection;