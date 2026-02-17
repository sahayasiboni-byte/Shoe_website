import React,{useState} from "react";
import { Link } from "react-router-dom";
import categoriesmodule from "../MainCategories/MainCategories.module.css";

import boot from "../../assets/boots1.png";
import formal from "../../assets/formal.png";
import running from "../../assets/running.png";
import oxford from "../../assets/oxford.png";
import sneaker from "../../assets/sneaker.png";
import sport from "../../assets/sports.png";
import neck from "../../assets/neck.png";
import loafer from "../../assets/loafer.png";

const MainCategories = () => {

  const [menuOpen, setMenuOpen] = useState(false);
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // change to "smooth" if needed
          })
          setMenuOpen(false)
        }

  const categories = [
    { img: sneaker, title: "Sneakers" },
    { img: boot, title: "Boots" },
    { img: formal, title: "Formal" },
    { img: running, title: "Running" },
    { img: oxford, title: "Oxford" },
    { img: sport, title: "Sports Shoe" },
    { img: neck, title: "High Neck" },
    { img: loafer, title: "Loafer" },
  ];

  return (
    <div className={categoriesmodule.catecontainer}>
      <div className={categoriesmodule.header}>
        <h1 data-aos="fade-up">Our Categories</h1>
      </div>
      <div className={categoriesmodule.grid} data-aos="fade-up">
        {categories.map((item, index) => (
          <Link to="/shoe" className={categoriesmodule.link} onClick={scrollToTop}>
          <div key={index} className={categoriesmodule.maincard}>
            <div className={categoriesmodule.card}>
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainCategories;
