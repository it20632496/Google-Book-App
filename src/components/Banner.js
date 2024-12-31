import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Readers' Favorite Books of 2024</h1>
        <p>Announcing readers' favorite books of 2024! Congratulations to the winners of the Goodreads Choice Awards.</p>
        <button className="view-results">View Results</button>
      </div>
    </div>
  );
}

export default Banner;
