import React from "react";
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
  FaFileInvoice,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  const name = Cookies.get("username") || "User";
  const email = Cookies.get("email") || "No email found";

  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("userid");
    Cookies.remove("email");
    navigate("/account");
  };

  const menuItems = [
    { title: "Edit Profile", icon: <FaUserEdit />, path: "/edit-profile" },
    { title: "Order History", icon: <FaShoppingBag />, path: "/order-history" },
    { title: "Track Order", icon: <FaTruck />, path: "/track-order" },
    { title: "Wishlist", icon: <FaHeart />, path: "/wishlist" },
    { title: "Saved Address", icon: <FaMapMarkerAlt />, path: "/saved-address" },
    { title: "Change Password", icon: <FaLock />, path: "/change-password" },
    { title: "Notifications", icon: <FaBell />, path: "/notifications" },
    { title: "Coupons & Rewards", icon: <FaGift />, path: "/coupons" },
    { title: "Download Invoice", icon: <FaFileInvoice />, path: "/invoice" },
    { title: "Dark Mode", icon: <FaMoon />, path: "/settings" },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.profileTop}>
          <div style={styles.avatar}>
            {name.charAt(0).toUpperCase()}
          </div>

          <h1 style={styles.name}>{name}</h1>
          <p style={styles.email}>{email}</p>
        </div>

        <div style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              style={styles.menuBtn}
              onClick={() => navigate(item.path)}
            >
              <span style={styles.icon}>{item.icon}</span>
              {item.title}
            </button>
          ))}
        </div>

        <button style={styles.logoutBtn} onClick={handleLogout}>
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
    background: "linear-gradient(135deg, #f5f5f5, #e8e8e8)",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "900px",
    background: "#fff",
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
    background: "#000",
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
    color: "#666",
    fontSize: "16px",
  },

  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  menuBtn: {
    padding: "18px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    background: "#fafafa",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "0.3s",
    color:"black",
  },

  icon: {
    fontSize: "20px",
    color: "#000",
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