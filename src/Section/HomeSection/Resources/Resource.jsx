import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import resourcemodule from './Resource.module.css'
import image1 from '../../../assets/resource1.png'
import image2 from '../../../assets/resource2.png'
import image3 from '../../../assets/resource3.png'
import image4 from '../../../assets/resource4.png'

const Resource = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // change to "smooth" if needed
      })
      setMenuOpen(false)
    }

  return (
    <div className={resourcemodule.resourcecontainer}>
      <h1 data-aos="fade-up">Articles & Resources</h1>

      <div data-aos="fade-up" className={resourcemodule.imagecontainer}>

        <Link to="/SubBlog" className={resourcemodule.link} onClick={scrollToTop}>
        <div className={resourcemodule.imagebox}>
            <img src={image1} alt="image1" />
            <p>Entertainment . April20,2025</p>
            <h2>Budget Travel: Exploring the World Affordably</h2>
        </div>
        </Link>

        <Link to="/SubBlog" className={resourcemodule.link} onClick={scrollToTop}>
        <div className={resourcemodule.imagebox}>
            <img src={image2} alt="image2" />
            <p>Technology . May1,2025</p>
            <h2>Improving Sleep Hygiene for Better Rest</h2>
        </div>
        </Link>

        <Link to="/SubBlog" className={resourcemodule.link} onClick={scrollToTop}>
        <div className={resourcemodule.imagebox}>
            <img src={image3} alt="image3" />
            <p>Social Issues . June12,2025</p>
            <h2>Top 10 Rendering Software for Stunning Visuals</h2>
        </div>
        </Link>

        <Link to="/SubBlog" className={resourcemodule.link} onClick={scrollToTop}>
        <div className={resourcemodule.imagebox}>
            <img src={image4} alt="image4" />
            <p>Fashine Guide . July7,2025</p>
            <h2>10 must-have wardrobe staples every fashion Lover</h2>
        </div>
        </Link>

      </div>

    </div>
  )
}

export default Resource
