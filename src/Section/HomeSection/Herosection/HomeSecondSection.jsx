import React from 'react'
import Homemodule from './HomeSecond.module.css'
import heroproduct from '../../../assets/hero-product.jpg'
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

const HomeSecondSection = () => {
  // const [menuopen,setMenuOpen] = useState(false)
  
    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
};

  return (
    <>
    <div data-aos="zoom-out" className={Homemodule.hero}>
        <div data-aos="fade-up" className={Homemodule.heroleft} >
          <h1>
            Explore <br /> Premium <br /> Shoes
          </h1>

          <div className={Homemodule.herobuttons}>
          <Link to="/shop" className={Homemodule.link} >
            <button className={Homemodule.btnprimary}>
              Shop Now →
            </button>
          </Link>

          <Link to="/categories" className={Homemodule.link} onClick={scrollToTop}>
            <button className={Homemodule.btnsecondary}>
              Categories →
            </button>
          </Link>
          </div>
        </div>

      <div data-aos="fade-up" className={Homemodule.herocard}>
      <Link to="/shop" className={Homemodule.link} >
        <img src={heroproduct} alt="Shoe" />
      </Link>
        <p> Explore New Arrivals <span>→</span> </p>
      </div>
      
      </div>
    </>
  )
}

export default HomeSecondSection
