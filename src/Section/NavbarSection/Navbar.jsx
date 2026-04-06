import React, { useState } from 'react'
import Homemodule from './Navbar.module.css'
import { IoSearch } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import { VscAccount } from "react-icons/vsc"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { Link } from 'react-router-dom'
import CartModal from '../../Section/CardSection/CardSection'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  // 🔹 Sample products (replace with API later)
  const products = [
    { id: 1, name: "Nike Shoes" },
    { id: 2, name: "Adidas T-Shirt" },
    { id: 3, name: "Puma Sneakers" },
    { id: 4, name: "Running Shoes" },
    { id: 5, name: "Casual Shirt" },
  ];

  // 🔍 Filter logic
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
    setMenuOpen(false);
  };

  return (
    <div className={Homemodule.navbar}>
      
      <div className={Homemodule.offerbar}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>

      <div className={Homemodule.navbars}>
        <h2 className={Homemodule.logo}>
          <Link to="/" className={Homemodule.link} onClick={scrollToTop}>
            SNIKEI
          </Link>
        </h2>

        <ul className={`${Homemodule.navlinks} ${menuOpen ? Homemodule.active : ""}`}>
          <li><Link to="/categories" className={Homemodule.link} onClick={scrollToTop}>Categories</Link></li>
          <li><Link to="/shop" className={Homemodule.link} onClick={scrollToTop}>Shop</Link></li>
          <li><Link to="/about" className={Homemodule.link} onClick={scrollToTop}>About</Link></li>
          <li><Link to="/blog" className={Homemodule.link} onClick={scrollToTop}>Blog</Link></li>
          <li><Link to="/contact" className={Homemodule.link} onClick={scrollToTop}>Contact</Link></li>
        </ul>

        <div className={Homemodule.navicons}>
          
          {/* 🔍 Search */}
          <span onClick={() => setSearchOpen(prev => !prev)}>
            <IoSearch />
          </span>

          {/* 🛒 Cart */}
          <span className={Homemodule.cartIcon} onClick={() => setCartOpen(true)}>
            <MdOutlineShoppingCart />
          </span>

          {/* 👤 Account */}
          <Link to="/account" className={Homemodule.link} onClick={scrollToTop}>
            <span><VscAccount /></span>
          </Link>

          {/* ☰ Menu */}
          <span
            className={Homemodule.menu}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <IoIosClose /> : <IoIosMenu />}
          </span>
        </div>
      </div>

      {/* 🔍 Search Box + Results */}
      {searchOpen && (
        <div className={Homemodule.searchBox}>
          
          <input
            type="text"
            placeholder="Search products..."
            className={Homemodule.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* 🔥 Live Results */}
          {search && (
            <div className={Homemodule.searchResults}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(item => (
                  <div 
                    key={item.id} 
                    className={Homemodule.resultItem}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className={Homemodule.noResult}>
                  No products found
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Navbar;