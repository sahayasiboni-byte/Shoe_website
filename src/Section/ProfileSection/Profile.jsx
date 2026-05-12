import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { IoIosLogOut } from "react-icons/io";

import {
  FaUserEdit,
  FaShoppingBag,
  FaTruck,
  FaHeart,
  FaMapMarkerAlt,
  FaLock,
  FaBell,
  FaGift,
  FaMoon,
  FaSun,
  FaFileInvoice,
} from "react-icons/fa";

const Profile = () => {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";

      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#000000";

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const name = Cookies.get("username") || "User";
  const email = Cookies.get("email") || "No email found";

  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("userid");
    Cookies.remove("email");

    navigate("/account");
  };

  const menuItems = [
    {
      title: "Edit Profile",
      icon: <FaUserEdit />,
      action: () => navigate("/edit-profile"),
    },

    {
      title: "Order History",
      icon: <FaShoppingBag />,
      action: () => navigate("/order-history"),
    },

    {
      title: "Track Order",
      icon: <FaTruck />,
      action: () => navigate("/track-order"),
    },

    {
      title: "Wishlist",
      icon: <FaHeart />,
      action: () => navigate("/wishlist"),
    },

    {
      title: "Saved Address",
      icon: <FaMapMarkerAlt />,
      action: () => navigate("/saved-address"),
    },

    {
      title: "Change Password",
      icon: <FaLock />,
      action: () => navigate("/change-password"),
    },

    {
      title: "Notifications",
      icon: <FaBell />,
      action: () => navigate("/notifications"),
    },

    {
      title: "Coupons & Rewards",
      icon: <FaGift />,
      action: () => navigate("/coupons"),
    },

    {
      title: "Download Invoice",
      icon: <FaFileInvoice />,
      action: () => {
        alert("Invoice Download Started");
      },
    },

    {
      title: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <FaSun /> : <FaMoon />,
      action: () => setDarkMode(!darkMode),
    },
  ];

  return (
    <div
      style={{
        ...styles.page,
        background: darkMode
          ? "linear-gradient(135deg, #121212, #1e1e1e)"
          : "linear-gradient(135deg, #f5f5f5, #e8e8e8)",
      }}
    >
      <div
        style={{
          ...styles.card,
          background: darkMode ? "#1f1f1f" : "#fff",
        }}
      >
        <div style={styles.profileTop}>
          <div style={styles.avatar}>
            {name.charAt(0).toUpperCase()}
          </div>

          <h1
            style={{
              ...styles.name,
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {name}
          </h1>

          <p
            style={{
              ...styles.email,
              color: darkMode ? "#ccc" : "#666",
            }}
          >
            {email}
          </p>
        </div>

        <div style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              style={{
                ...styles.menuBtn,
                background: darkMode ? "#2b2b2b" : "#fafafa",
                color: darkMode ? "#fff" : "#000",
                border: darkMode
                  ? "1px solid #444"
                  : "1px solid #ddd",
              }}
              onClick={item.action}
            >
              <span style={styles.icon}>
                {item.icon}
              </span>

              {item.title}
            </button>
          ))}
        </div>

        <button
          style={styles.logoutBtn}
          onClick={handleLogout}
        >
          <IoIosLogOut size={22} />
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "900px",
    borderRadius: "20px",
    padding: "35px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  },

  profileTop: {
    textAlign: "center",
    marginBottom: "35px",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#ff6b00",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "700",
    margin: "0 auto 15px",
  },

  name: {
    fontSize: "32px",
    marginBottom: "8px",
  },

  email: {
    fontSize: "16px",
  },

  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  menuBtn: {
    padding: "18px",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "0.3s",
  },

  icon: {
    fontSize: "20px",
    color: "#ff6b00",
  },

  logoutBtn: {
    marginTop: "30px",
    width: "100%",
    padding: "15px",
    background: "#d90429",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
};

export default Profile;