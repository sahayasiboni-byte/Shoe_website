import React, { useState,useEffect } from "react";
import { IoClose } from "react-icons/io5";
import cardmodule from "./Card.module.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";

const CardSection = ({ isOpen, onClose }) => {

  const [addcart,setAddCart]=useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/getcart/${id}`)
      .then((res) => {
        setAddCart(res.data);

      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  if (!isOpen) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  };

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
          No items found.
        </div>

        <Link to="/shop" className={cardmodule.link} onClick={scrollToTop}>
          <button className={cardmodule.shopBtn}>
            Shop Now →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardSection;