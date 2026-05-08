import React from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import ordermodule from "./Order.module.css";

const Order = () => {
  const location = useLocation();

  const item = location.state?.product;

  const username = Cookies.get("username");
  const email = Cookies.get("email");

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
    alert("Order placed successfully");
  };

  return (
    <div className={ordermodule.orderContainer}>
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
            className={ordermodule.orderInput}
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
            className={ordermodule.orderInput}
          />

          <h3 className={ordermodule.paymentTitle}>Payment Method</h3>

          <div className={ordermodule.paymentBox}>
            <label className={ordermodule.paymentOption}>
              <input type="radio" name="payment" required />
              Cash on Delivery
            </label>

            <label className={ordermodule.paymentOption}>
              <input type="radio" name="payment" />
              UPI Payment
            </label>

            <label className={ordermodule.paymentOption}>
              <input type="radio" name="payment" />
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

          <p className={ordermodule.productPrice}>
            Discount: ₹{discount}
          </p>

          <p className={ordermodule.productPrice}>
            Delivery Charge: ₹{deliveryCharge}
          </p>

          <p className={ordermodule.productPrice}>
            GST (18%): ₹{gst}
          </p>

          <p className={ordermodule.productQty}>
            Quantity: {item.quantity}
          </p>

          <h2 className={ordermodule.totalPrice}>
            Total Amount: ₹{totalPrice}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Order;