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
      .get(`https://shoe-backend-oz5k.onrender.com/api/getcart/${userId}`)
      .then((res) => {
        console.log("CART DATA:", res.data);
        setCartItems(res.data.data || []);
      })
      .catch((err) => {
        console.error("Cart Error:", err.response?.data || err);
        setCartItems([]);
      });
  }, [userId, isOpen]);

  // quantity update
  const updateQuantity = async (id, action) => {
    try {
      const res = await axios.put(
        `https://shoe-backend-oz5k.onrender.com/api/updatequantity/${id}/`,
        {
          action: action,
        }
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: res.data.quantity }
            : item
        )
      );
    } catch (error) {
      console.log(error);
      alert("Quantity update failed");
    }
  };

  // remove item
  const removeItem = async (id) => {
    try {
      await axios.delete(
        `https://shoe-backend-oz5k.onrender.com/api/delete/${id}/`
      );

      setCartItems((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("Item removed from cart");
    } catch (err) {
      console.log(err);
      alert("Failed to remove item");
    }
  };

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
            cartItems.map((item, index) => (
              <div
                key={item.id || `${item.product?.id}-${index}`}
                className={cardmodule.cartItem}
              >
                {item.product?.productimage && (
                  <img
                    src={item.product.productimage}
                    alt={item.product?.productname || "Product"}
                    className={cardmodule.cartImage}
                  />
                )}

                <div className={cardmodule.cartDetails}>
                  <h4>{item.product?.productname || "Product Name"}</h4>

                  <p>₹{item.product?.currentprice}</p>

                  <div className={cardmodule.qtyBox}>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, "decrease")
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, "increase")
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className={cardmodule.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

                <Link to="/order" state={{ product: item }} className={cardmodule.link}
                 onClick={onClose} >
                <button className={cardmodule.orderBtn}>
                 Order Now
                </button>
                </Link>
              </div>
            ))
          ) : (
            <p className={cardmodule.emptyCart}>
              No items found.
            </p>
          )}
        </div>

        <Link
          to="/shop"
          className={cardmodule.link}
          onClick={onClose}
        >
          <button className={cardmodule.shopBtn}>
            Shop Now →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardSection;