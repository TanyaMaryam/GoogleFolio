import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";

import AllResultsCard from "../Components/AllResultsCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FilterMenu from "../Components/FilterMenu";

function Social() {
  const contact = Content.filter((item) => item.category === "social");
  return (
    <div className="main">
      <div className="all-results-container">
        <p className="result-count">
          About {contact.length} results (0.57 seconds)
        </p>
        <AllResultsCard results={contact} />
      </div>
    </div>
  );
}
export default Social;