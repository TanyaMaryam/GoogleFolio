import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";



import Footer from "../Components/Footer";
import FilterMenu from "../Components/FilterMenu";
import AllResultsCard from "../Components/AllResultsCard";
import Header from "../Components/Header";


function Skills() {
  const skills = Content.filter((item) => item.category === "skills");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          Skills {skills.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={skills} />
      </div>
      <Footer />
    </div>
  );
}
export default Skills;