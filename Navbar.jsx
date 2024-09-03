import React from "react";
import "./styles.css";
import Logo from "../../assets/default-monochrome-black 1.png";

const Navbar = () => {
  return (
    <>
      <div className="top-banner">
        TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 🌱 EASILY SAVE MONEY WHILST
        CREATING A SUSTAINABLE WARDROBE 🌍
      </div>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="TinyClo" />
        </div>
        <nav className="nav-links">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Why Rent?</a>
          <a href="#">Clean Out Closet</a>
          <a href="#">About Us</a>
          <a href="#">Store</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="login-button">Login/Sign Up</button>
      </header>
    </>
  );
};

export default Navbar;
