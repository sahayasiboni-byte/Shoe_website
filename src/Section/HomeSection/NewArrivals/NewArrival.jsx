import React,{useState} from "react";
import { Link } from "react-router-dom";
import sellermodule from "../SellerSection/Seller.module.css";

import seller1 from "../../../assets/new1.png";
import seller2 from "../../../assets/new2.png";
import seller3 from "../../../assets/new3.png";
import seller4 from "../../../assets/new4.png";
import seller5 from "../../../assets/new5.png";
import seller6 from "../../../assets/new6.png";
import seller7 from "../../../assets/new7.png";
import seller8 from "../../../assets/new8.png";

const NewArrival = () => {

  const [setMenuOpen] = useState(false);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" // change to "smooth" if needed
        })
        setMenuOpen(false)
      }

  const bestSellers = [
    {
      id: 1,
      name: "Orinzo Running Shoe",
      image: seller1,
      price: 400,
      oldPrice: 420,
      rating: '(4.8)'
    },
    {
      id: 2,
      name: "Kixen Loafers",
      image: seller2,
      price: 400,
      oldPrice: 420,
      rating: '(4.3)'
    },
    {
      id: 3,
      name: "Cavora High Neck",
      image: seller3,
      price: 520,
      oldPrice: 530,
      rating: '(4.1)'
    },
    {
      id: 4,
      name: "Formal Rovik Shoe",
      image: seller4,
      price: 320,
      oldPrice: 350,
      rating: '(4.3)'
    },
    {
      id: 5,
      name: "Zunk Sports Shoe",
      image: seller5,
      price: 360,
      oldPrice: 390,
      rating: '(4.2)'
    },
    {
      id: 6,
      name: "Strideon Boot",
      image: seller6,
      price: 480,
      rating: '(4.4)'
    },
    {
      id: 7,
      name: "Thrivo Oxford Shoe",
      image: seller7,
      price: 299,
      oldPrice: 340,
      rating: '(4.5)'
    },
    {
      id: 8,
      name: "Stride Sneakers",
      image: seller8,
      price: 435,
      oldPrice: 450,
      rating: '(4.1)'
    }
  ];

  return (
    <div className={sellermodule.sellercotainer}>
      <h1 data-aos="fade-up">New Arrival</h1>

      <div data-aos="fade-up" className={sellermodule.sellergrid}>
        {bestSellers.map((item) => (
          <Link to="/shoe" className={sellermodule.link} onClick={scrollToTop}>
          <div data-aos="fade-up" key={item.id} className={sellermodule.card}>
            
            <div className={sellermodule.imageBox}>
              <img src={item.image} alt={item.name} />
            </div>

            <h3>{item.name}</h3>

            {item.rating && (
              <p className={sellermodule.rating}>⭐ {item.rating}</p>
            )}

            <div className={sellermodule.priceBox}>
              <span className={sellermodule.newPrice}>
                ${item.price}.00 USD
              </span>

              {item.oldPrice && (
                <span className={sellermodule.oldPrice}>
                  ${item.oldPrice}.00 USD
                </span>
              )}
            </div>

          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
