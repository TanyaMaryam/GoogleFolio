import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";



import Footer from "../Components/Footer";
import FilterMenu from "../Components/FilterMenu";
import AllResultsCard from "../Components/AllResultsCard";
import Header from "../Components/Header";


function Projects() {
  const projects = Content.filter((item) => item.category === "projects");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
         Projects {projects.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={projects} />
      </div>
      <Footer />
    </div>
  );
}
export default Projects;