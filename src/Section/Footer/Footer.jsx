import React,{useState} from 'react'
import footermodule from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // change to "smooth" if needed
      })
      setMenuOpen(false)
    }

  
  return (
    <>
      {/* ---------- TOP FOOTER ---------- */}
      <div className={footermodule.footercontainer}>

        <div className={footermodule.navigation}>
          <h4>Navigation</h4>
          <div className={footermodule.option}>
            <Link to="/" className={footermodule.link} onClick={scrollToTop}><p>Home</p></Link>
            <p>About Us</p>
            <p>Categories</p>
            <p>Shop</p>
            <p>Articles</p>
            <p>Contact</p>
          </div>
        </div>

        <div className={footermodule.navigation}>
          <h4>Categories</h4>
          <div className={footermodule.option}>
            <p>Sneakers</p>
            <p>Boots</p>
            <p>Formal</p>
            <p>Running</p>
            <p>Oxford</p>
            <p>Sports Shoe</p>
          </div>
        </div>

        <div className={footermodule.navigation}>
          <h4>Utility Pages</h4>
          <div className={footermodule.option}>
            <p>Style Guide</p>
            <p>Licences</p>
            <p>Changelog</p>
            <p>Password Protected</p>
            <p>404 page</p>
          </div>
        </div>

        <div className={footermodule.navigation}>
          <h4>Our Locations</h4>

          <div className={footermodule.location}>
            <div className={footermodule.loc1}>
              <p>NJ Store Location</p>
              <p>
                56757 Dream Avenue, <br />
                Garden City, 234564 <br />
                New Jersey, USA
              </p>
              <p>snikei@gmail.com</p>
              <p>(345) 123 456 5368</p>
            </div>

            <div className={footermodule.loc1}>
              <p>NY Store Location</p>
              <p>
                12273 Dream Avenue, <br />
                Bronx, 123456 <br />
                New York, USA
              </p>
              <p>snikei@gmail.com</p>
              <p>(313) 123 456 8888</p>
            </div>
          </div>

          <div className={footermodule.footericon}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >
            <FaFacebook />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
            </a>

             <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
             <FaLinkedinIn />
             </a>

            <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
            </a>

          </div>
        </div>
      </div>

      <div className={footermodule.footerbottom}>
        <div className={footermodule.bottomleft}>
          <p>
            Design by <span>Meta Flow</span> &nbsp; | &nbsp; Powered by <span>Webflow</span>
          </p>
        </div>

        <div className={footermodule.bottomcenter}>
          <p>Copyright @Snikei. All Rights Reserved</p>
        </div>

        <div className={footermodule.bottomright}>
          <p>Privacy Policy  Terms and Condition</p>
        </div>
      </div>
    </>
  )
}

export default Footer
