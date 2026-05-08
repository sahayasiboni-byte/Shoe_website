import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import ordermodule from "./Order.module.css";

const Order = () => {
  const location = useLocation();
  const item = location.state?.product;

  const username = Cookies.get("username");
  const email = Cookies.get("email");

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!item) {
    return <h2>No Product Found</h2>;
  }

  const originalPrice = item.product.previousprice * item.quantity;
  const offerPrice = item.product.currentprice * item.quantity;
  const discount = originalPrice - offerPrice;
  const deliveryCharge = 100;
  const gst = Math.round(offerPrice * 0.18);
  const totalPrice = offerPrice + deliveryCharge + gst;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setAddress("");
    setPhone("");
    setPayment("");

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className={ordermodule.orderContainer}>
      {showPopup && (
        <div className={ordermodule.popupOverlay}>
          <div className={ordermodule.popupBox}>
            <div className={ordermodule.tickIcon}>✔</div>
            <h2>Order Placed Successfully</h2>
          </div>
        </div>
      )}

      <h1 className={ordermodule.orderTitle}>Order Page</h1>

      <div className={ordermodule.orderWrapper}>
        <form onSubmit={handlePlaceOrder} className={ordermodule.orderForm}>
          <h2>Delivery Details</h2>

          <input
            type="text"
            placeholder="Enter Name"
            required
            defaultValue={username}
            className={ordermodule.orderInput}
          />

          <input
            type="email"
            placeholder="Enter Email"
            required
            defaultValue={email}
            className={ordermodule.orderInput}
          />

          <input
            type="text"
            placeholder="Enter Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={ordermodule.orderInput}
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={ordermodule.orderInput}
          />

          <h3 className={ordermodule.paymentTitle}>Payment Method</h3>

          <div className={ordermodule.paymentBox}>
            <label className={ordermodule.paymentOption}>
              <input
                type="radio"
                name="payment"
                required
                checked={payment === "Cash on Delivery"}
                onChange={() => setPayment("Cash on Delivery")}
              />
              Cash on Delivery
            </label>

            <label className={ordermodule.paymentOption}>
              <input
                type="radio"
                name="payment"
                checked={payment === "UPI Payment"}
                onChange={() => setPayment("UPI Payment")}
              />
              UPI Payment
            </label>

            <label className={ordermodule.paymentOption}>
              <input
                type="radio"
                name="payment"
                checked={payment === "Credit / Debit Card"}
                onChange={() => setPayment("Credit / Debit Card")}
              />
              Credit / Debit Card
            </label>
          </div>

          <button type="submit" className={ordermodule.placeOrderBtn}>
            Place Order
          </button>
        </form>

        <div className={ordermodule.productSection}>
          <h2>Product Details</h2>

          <img
            src={item.product.productimage}
            alt={item.product.productname}
            className={ordermodule.productImage}
          />

          <h3 className={ordermodule.productName}>
            {item.product.productname}
          </h3>

          <p className={ordermodule.productPrice}>
            Original Price: ₹{originalPrice}
          </p>

          <p className={ordermodule.productPrice}>
            Offer Price: ₹{offerPrice}
          </p>

          <p className={ordermodule.productPrice}>Discount: ₹{discount}</p>

          <p className={ordermodule.productPrice}>
            Delivery Charge: ₹{deliveryCharge}
          </p>

          <p className={ordermodule.productPrice}>GST (18%): ₹{gst}</p>

          <p className={ordermodule.productQty}>Quantity: {item.quantity}</p>

          <h2 className={ordermodule.totalPrice}>
            Total Amount: ₹{totalPrice}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Order;