import React from 'react'
import Featuremodule from './Feature.module.css'
import { FaRecycle } from "react-icons/fa";
import { VscCoverage } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";

const Feature = () => {
  return (
    <>
      <div data-aos="fade-up" className={Featuremodule.feature}>

        <div className={Featuremodule.card}>
            <span><FaRecycle /></span>
            <h3>Sustainable Materials</h3>
            <p>We believe great style shouldn’t come at the planet’s expense.</p>
        </div>

        <div className={Featuremodule.card}>
            <span><VscCoverage /></span>
            <h3>Warranty Included</h3>
            <p>Every pair comes with a hassle-free 6-month warranty</p>
        </div>

        <div className={Featuremodule.card}>
            <span><TbTruckDelivery /></span>
            <h3>Delivery & Shipping</h3>
            <p>Your shoes will be dispatched within 1–2 business days</p>
        </div>
    
       <div className={Featuremodule.card}>
        <span><FaGlobe /></span>
        <h3>Eco-Friendly Fabrics</h3>
        <p>Crafted with sustainability in mind, our shoes feature eco-friendly fabrics</p>
       </div>
       
      </div>
    </>
  )
}

export default Feature
