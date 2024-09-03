import React from "react";
import "./styles.css";
import KidClothing from "../../assets/image-3.png";
import Equipment from "../../assets/equipment.png";
import Toys from "../../assets/toys.png";

const Category = () => {
  const categories = [
    {
      title: "Kids Clothing",
      age: "Age (0-6)",
      price: "Starting from 100 INR",
      image: KidClothing,
      color: "#E6F3FC",
      imagePosition: "left",
    },
    {
      title: "Equipments",
      age: "Age (0-6)",
      price: "Starting from 500 INR",
      image: Equipment,
      color: "#FCE6E6",
      imagePosition: "right",
      imageAngle: -13.08,
    },
    {
      title: "Toys",
      age: "Age (0-6)",
      price: "Starting from 100 INR",
      image: Toys,
      color: "#E6FCE7",
      imagePosition: "right",
      imageAngle: -19.97,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-wrapper">
          <p className="category-price-top">{category.price}</p>

          <div
            className={`category-card ${category.imagePosition}-image`}
            style={{ backgroundColor: category.color }}
          >
            <div className="category-content">
              <h2 className="category-title">{category.title}</h2>
              <p className="category-age">{category.age}</p>
              <button className="explore-button">Explore &gt;</button>
            </div>
            <div className="category-image">
              <img
                src={category.image}
                alt={category.title}
                style={
                  category.imageAngle
                    ? { transform: `rotate(${category.imageAngle}deg)` }
                    : {}
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
