import React from 'react'
import shoemodule from './SubShoe.module.css'
import shoe1 from '../../assets/seller1.png'
import star from '../../assets/starrating.webp'
import { FaArrowRight } from "react-icons/fa";

const SubShoe = () => {
  return (
  <div className={shoemodule.shoecontainer}>
  <div className={shoemodule.shoedetail}>
    
    <div className={shoemodule.shoeimage}>
        <img src={shoe1} alt="" />
    </div>
    
    <div className={shoemodule.shoeinfo}>
        <div className={shoemodule.star}>
            <img src={star} alt="" />
            <p>(140reviews)</p>
        </div>

        <div className={shoemodule.cost}>
        <h3>Eclipse Sneakers</h3>
        <p>$ 430.00 USD <del>$ 450.00 USD</del> </p>
        </div>

        <p className={shoemodule.text}>We have this product in United States warehouse. If destination means you can receive the parcel faster and earlier than expected.</p>

        <div className={shoemodule.shoesize}>
            <div className={shoemodule.size}>S</div>
            <div className={shoemodule.size}>M</div>
            <div className={shoemodule.size}>L</div>
            <div className={shoemodule.size}>XL</div>
            <div className={shoemodule.size}>XXL</div>
        </div>

        <div className={shoemodule.add}>
            <input type="number" />
            <button>Add to Cart <FaArrowRight /></button>
        </div>

        <div className={shoemodule.more}>
        <h3>More Info</h3>
        <li>
            <ul>Available in a comprehensive range of sizes</ul>
        </li>
        <li>
            <ul>Pre-softened for enhanced comfort and flexibility</ul>
        </li>
        </div>

    </div>

  </div>
  
  <div className={shoemodule.shoecontent}>

  <h3>Product Overview</h3>
  <p>Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.Made with premium materials and breathable lining, each pair ensures all-day comfort without compromising on design. The lightweight sole offers superior flexibility and shock absorption, reducing foot fatigue and keeping you energized throughout your day. Reinforced stitching and quality craftsmanship provide long-lasting wear, so your shoes look fresh—season after season.From modern minimalism to bold street-inspired looks, our collection is thoughtfully created to suit a variety of personal styles. Slip them on and experience a perfect fit, versatile design, and the confidence to move through life in comfort and style.</p>

  </div>

  <ul>
    <li>All-day comfort with soft cushioning and ergonomic design</li>
    <li>Breathable materials to keep your feet cool and fresh</li>
    <li>Versatile style — perfect for work, weekends, or travel</li>
    <li>Lightweight sole for easy movement and reduced fatigue</li>
    <li>Premium craftsmanship with durable stitching and finishes</li>
  </ul>
  </div>
      
  )
}

export default SubShoe
