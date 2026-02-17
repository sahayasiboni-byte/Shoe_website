import React,{useState} from "react";
import { IoClose } from "react-icons/io5";
import cardmodule from "./Card.module.css";
import { Link } from "react-router-dom";

const CardSection = ({ isOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isOpen) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // change to "smooth" if needed
    })
    setMenuOpen(false)
  }

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

        <Link to={'/shop'} className={cardmodule.link} onClick={scrollToTop}>
        <button className={cardmodule.shopBtn}>
          Shop Now →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CardSection;
