import React from "react";
import "./CategoryCard.css";

function CategoryCard({ category, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={category} />
      <h4>{category}</h4>
    </div>
  );
}

export default CategoryCard;
