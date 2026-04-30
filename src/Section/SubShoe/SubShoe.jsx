import React, { useEffect, useState } from 'react';
import shoemodule from './SubShoe.module.css';
import star from '../../assets/starrating.webp';
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";

const SubShoe = () => {

  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const [added, setAdded] = useState(false);

  const { id } = useParams();

  // FETCH PRODUCT
  useEffect(() => {
    axios.get(`https://shoe-backend-oz5k.onrender.com/api/img/get_product/${id}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]); // ✅ FIXED

  const handleAddToCart = async () => {
    try {
      const user_id = Cookies.get("userid");

      if (!user_id) {
      alert("Please login first");
      return;
    }

      await axios.post("https://shoe-backend-oz5k.onrender.com/api/cart/", {   
        user: Number(user_id),                                     
        product: product.id,
        quantity: quantity
      });

      setAdded(true);

      // setTimeout(() => { 
      //   setAdded(false);
      // }, 2000);

    } catch (error) {
      console.error("Add to cart error:", error);
      // alert("Failed to add to cart");
    }
  };


    // setTimeout(() => {
    //   setAdded(false);
    // }, 2000);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>No product found</p>;

return (
    <div className={shoemodule.shoecontainer}>

      <div className={shoemodule.shoedetail}>

        {/* IMAGE */}
        <div className={shoemodule.shoeimage}>
          <img
            src={product.productimage}
            alt={product.productname}
          />
        </div>

        <div className={shoemodule.shoeinfo}>

          <div className={shoemodule.star}>
            <img src={star} alt="" />
            <p>(0 reviews)</p>
          </div>

          <div className={shoemodule.cost}>
            <h3>{product.productname}</h3>
            <p>
              ₹ {product.currentprice}.00
              <del> ₹ {product.previousprice}.00</del>
            </p>
          </div>

          <p className={shoemodule.text}>
            {product.descripe}
          </p>

          {/* SIZE */}
          <div className={shoemodule.shoesize}>
            {["S", "M", "L", "XL", "XXL"].map((size, i) => (
              <div key={i} className={shoemodule.size}>{size}</div>
            ))}
          </div>

          {/* ADD TO CART */}
          <div className={shoemodule.add}>
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

            <button onClick={handleAddToCart}>
              {added ? "Added Successfully" : "Add to Cart"}
              {!added && <FaArrowRight />}
            </button>
          </div>

          <div className={shoemodule.more}>
            <h3>More Info</h3>
            <li><ul>Available in multiple sizes</ul></li>
            <li><ul>Comfortable and durable</ul></li>
          </div>

        </div>
      </div>

      <ul>
        <li>All-day comfort with soft cushioning</li>
        <li>Breathable materials</li>
        <li>Versatile style</li>
        <li>Lightweight sole</li>
        <li>Premium craftsmanship</li>
      </ul>

    </div>
  );
};

export default SubShoe;