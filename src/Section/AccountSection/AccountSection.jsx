import React, { useState } from "react";
import accountmodule from "./Account.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const AccountSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newError = {};

    if (!email.trim()) {
      newError.email = "*Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = "*Enter a valid email";
    }

    if (!password.trim()) {
      newError.password = "*Password is required";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const accountSubmit = async () => {
    if (!validate()) return;

    try {
      const res = await axios.post(
        "https://shoe-backend-oz5k.onrender.com/api/login",
        {
          email: email.trim(),
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      if (res.data?.data) {
        Cookies.set("username", res.data.data.name);
        Cookies.set("userid", res.data.data.id);
        Cookies.set("email", res.data.data.email);

        alert("SignIn Successful");

        navigate("/");
      } else {
        alert(res.data?.message || "Login failed");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err);

      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.response?.data?.detail ||
        err.message ||
        "Login failed";

      alert(message);
    }
  };

  return (
    <div className={accountmodule.accountcontainer}>
      <h1>Sign in</h1>

      <div className={accountmodule.form}>
        <label>Email</label>

        <input
          className={accountmodule.accountinput}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        {error.email && (
          <span className={accountmodule.error}>
            {error.email}
          </span>
        )}

        <label>Password</label>

        <input
          type="password"
          className={accountmodule.accountinput}
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error.password && (
          <span className={accountmodule.error}>
            {error.password}
          </span>
        )}

        <button onClick={accountSubmit}>
          Sign In Now <FaArrowRight />
        </button>

        <div className={accountmodule.signupRow}>
          <p>Don't have an account?</p>

          <Link to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;