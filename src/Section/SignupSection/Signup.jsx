import React, { useState } from "react";
import styles from "./Signup.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState({});

  const validate = () => {
    const newError = {};

    if (!name.trim()) newError.name = "*Name is required";

    if (!email.trim()) {
      newError.email = "*Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = "*Enter a valid email";
    }

    if (!password.trim()) {
      newError.password = "*Password is required";
    } else if (password.length < 8) {
      newError.password = "*Password must be at least 8 characters";
    }

    if (!terms) newError.terms = "*You must accept terms";

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSignup = async() => {
    if (validate()) {
      try{
        const response=await axios.post("http://127.0.0.1:8000/api/register",{
          name:name,
          email:email,
          password:password,
        })
        console.log(response.data);
        alert("Account Created Sucsessfully!");

        // reset form
        setName("");
        setEmail("");
        setPassword("");
        setTerms(false);
        setError({});
      }catch(err){  
        console.error(err,'s');
        alert(err)
      }
    }
  };
 

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>

      <div className={styles.form}>
        <label>Name</label>
        <input
          type="text" className={styles.signinput}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error.name && <span className={styles.error}>{error.name}</span>}

        <label>Email</label>
        <input className={styles.signinput}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
        {error.email && <span className={styles.error}>{error.email}</span>}

        <label>Password</label>
        <input className={styles.signinput}
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && (
          <span className={styles.error}>{error.password}</span>
        )}

        <div className={styles.terms}>
          <input className={styles.signinput}
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <p>
            By creating an account, I agree to this website's <span>Privacy Policy</span> and <span>Terms of Conditions</span>
          </p>
        </div>
        {error.terms && <span className={styles.error}>{error.terms}</span>}

        <div className={styles.terms}>
          <input className={styles.signinput}
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <p>
            I consent to receive marketing emails.
          </p>
        </div>
        {error.terms && <span className={styles.error}>{error.terms}</span>}

        <button onClick={handleSignup} disabled={!terms}>
         Sign Up Now<FaArrowRight />
        </button>

         <div className={styles.signupRow}>
          <p>Already have an account?</p>
          <Link to="/account">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
