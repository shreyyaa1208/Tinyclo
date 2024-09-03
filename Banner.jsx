import React from "react";
import "./styles.css";
import Banner2 from "../../assets/pexels-nano-erdozain-120534369-21073543 1.png";
import Flower from "../../assets/Flower-2--Streamline-Fun-Stickers.png";
import Boat from "../../assets/Boat--Streamline-Fun-Stickers.png";
import Vector from "../../assets/Vector.png";
import Music from "../../assets/Note-1--Streamline-Fun-Stickers.png";
import Cart from "../../assets/cart.png";

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="highlight">BABIES</span> GROW FAST
          </h1>
          <p>Simplify Your Life with Our</p>
          <button className="subscription-button">TinyClo Subscription</button>
          <div className="cta-buttons">
            <button className="how-it-works-button">How it works?</button>
            <button className="membership-button">Start Membership</button>
            <a href="#" id="cart-link">
              <img src={Cart} alt="cart" className="cart" />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={Music} alt="Music" className="music-img" />
          {<img src={Boat} alt="Boat" className="boat-img" />}
          {<img src={Flower} alt="Flower" className="flower-img" />}
          <img src={Banner2} alt="Mother and Baby" className="mother-img" />
          <img src={Vector} alt="vector " className="vector-name" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
