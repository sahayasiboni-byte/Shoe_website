import React, { useState } from "react";
import accountmodule from "./Account.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const AccountSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

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

  const accountSubmit = async() => {
    if (validate()) {
      try{
        const res=await axios.post("http://127.0.0.1:8000/api/login",{
          email:email,
          password:password
        })
        console.log(res.data);
        alert("SingIn Successfull")

      }catch(err){
        console.log(err)
      }
    }
  };

  return (
    <div className={accountmodule.accountcontainer}>
      <h1>Sign in</h1>

      <div className={accountmodule.form}>
        <label>Email</label>
        <input className={accountmodule.accountinput}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
        {error.email && <span className={accountmodule.error}>{error.email}</span>}

        <label>Password</label>
        <input
          type="password" className={accountmodule.accountinput}
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && (
          <span className={accountmodule.error}>{error.password}</span>
        )}

        <button onClick={accountSubmit}>
          Sign In Now <FaArrowRight />
        </button>

        <div className={accountmodule.signupRow}>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
