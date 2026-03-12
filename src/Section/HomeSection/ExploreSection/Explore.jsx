import React from "react";
import Exploremodule from "../ExploreSection/Explore.module.css";
import Homemodule from '../Herosection/HomeSecond.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Explore = () => {

  const [setMenuOpen] = useState(false)
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // change to "smooth" if needed
      })
      setMenuOpen(false)
  }

  return (
    
    <div className={Exploremodule.explorecontainer}>
      
      <div data-aos="fade-right" className={Exploremodule.exploreleft}>

        <span className={Exploremodule.off}>20% OFF</span>

        <div className={Exploremodule.content}>
          <h3>Explore All Formal Shoes</h3>
          <Link to="/shop" className={Homemodule.link} onClick={scrollToTop}>
          <button className={Exploremodule.shop}> Show Now <FaArrowRight /> </button>
          </Link>
        </div> 

      </div>

      <div data-aos="fade-left" className={Exploremodule.exploreright}>

        <span className={Exploremodule.off}>25% OFF</span>

        <div className={Exploremodule.content}>
          <h3>Grab The Latest Running Shoes</h3>
          <Link to="/shop" className={Homemodule.link} onClick={scrollToTop}>
          <button className={Exploremodule.shop}> Show Now <FaArrowRight /> </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Explore;
