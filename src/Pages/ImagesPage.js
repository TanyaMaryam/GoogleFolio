import React from "react";
import { ImagesContent } from "../data/ImagesContent.js";
import "./ImagesPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FilterMenu from "../Components/FilterMenu";

const ImagesPage = ({ results }) => {
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="images-content">
        {ImagesContent.map((item) => (
          <div className="images--card">
            <a href={item.link} className="images--img-container">
              <img src={item.img} alt={item.name} />
            </a>
            <a href={item.link} className="images--text-container">
              <p className="images--name">{`${item.name}`}</p>
              <p className="images--link">{`${item.link}`}</p>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;