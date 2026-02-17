import React, {useState} from "react";
import blogmodule from "./Blog.module.css";
import { Link } from "react-router-dom";

import seller1 from "../../assets/resource1.png";
import seller2 from "../../assets/resource2.png";
import seller3 from "../../assets/resource3.png";
import seller4 from "../../assets/resource4.png";
import seller5 from "../../assets/resource5.png";
import seller6 from "../../assets/resource6.png";
import seller7 from "../../assets/resource7.png";
import seller8 from "../../assets/resource8.png";
import seller9 from "../../assets/resource9.png";
import seller10 from "../../assets/resource10.png";
import seller11 from "../../assets/resource11.png";
import seller12 from "../../assets/resource12.png";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "Entertainment",
      date: "April 20, 2025",
      image: seller1,
      title: "Budget Travel: Exploring the World Affordably",
    },
    {
      id: 2,
      category: "Technology",
      date: "May 1, 2025",
      image: seller2,
      title: "Improving Sleep Hygiene for Better Rest",
    },
    {
      id: 3,
      category: "Social Issues",
      date: "June 12, 2025",
      image: seller3,
      title: "Top 10 Rendering Software for Stunning Visuals",
    },
    {
      id: 4,
      category: "Fashion Guide",
      date: "July 7, 2025",
      image: seller4,
      title: "10 Must-Have Wardrobe Staples Every Fashion Lover Needs",
    },
    {
      id: 5,
      category: "Technology",
      date: "October 2, 2025",
      image: seller5,
      title: "Budget Travel: Exploring the World Affordably",
    },
    {
      id: 6,
      category: "Public Issues",
      date: "October 10, 2023",
      image: seller6,
      title: "How People Achieve Success Consistently",
    },
    {
      id: 7,
      category: "Entertainment",
      date: "October 6, 2025",
      image: seller7,
      title: "Improving Sleep Hygiene for Better Rest",
    },
    {
      id: 8,
      category: "Entertainment",
      date: "April 20, 2025",
      image: seller8,
      title: "Improving Sleep Hygiene for Better Rest",
    },
    {
      id: 9,
      category: "Travel",
      date: "October 2, 2023",
      image: seller9,
      title: "Budget Travel: Exploring the World Affordably",
    },
    {
      id: 10,
      category: "Fashion Guide",
      date: "October 8, 2023",
      image: seller10,
      title: "Top 10 Rendering Software for Stunning Visuals",
    },
    {
      id: 11,
      category: "Entertainment",
      date: "October 3, 2023",
      image: seller11,
      title: "Budget Travel: Exploring the World Affordably",
    },
    {
      id: 12,
      category: "Social Issues",
      date: "October 3, 2025",
      image: seller12,
      title: "Top 10 Rendering Software for Stunning Visuals",
    },
  ];

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
    <div className={blogmodule.blogcotainer}>
      <h1 data-aos="fade-up">Latest Blogs</h1>

      <div className={blogmodule.sellergrid}>
        {blogs.map((item) => (

          <Link to="/SubBlog" className={blogmodule.link} onClick={scrollToTop}>
          <div key={item.id} className={blogmodule.card} data-aos="fade-up">
            <div className={blogmodule.imageBox}>
              <img src={item.image} alt={item.title} />
            </div>

            <p className={blogmodule.meta}>
              {item.category} · {item.date}
            </p>

            <h3>{item.title}</h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
