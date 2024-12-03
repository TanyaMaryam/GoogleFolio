import "./Styles.css";
import "./Search.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
  //finish import
} from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Education from "./Pages/Education.js";
import Skills from "./Pages/Skills.js";
import Projects from "./Pages/ProjectsPage.js";
import ImagesPage from "./Pages/ImagesPage.js";
import ProjectsPage from "./Pages/ProjectsPage.js";
import Social from "./Pages/Social.js";
import NotFound from "./Pages/NotFound.js";

// import works from "./pages/works";
// import Home from "./pages/home";
// import writing from "./pages/writing";
// import social from "./pages/social";
// import AllResults from "./pages/allResults";
// import NotFound from "./pages/notFound";
// import ProjectsPage from "./pages/projectsPage";
// import ImagesPage from "./pages/imagesPage";
// import BlogPage from "./pages/blogPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/all" component={AllResults} /> */}
        <Route path="/about" element={<About/>} />
           <Route path="/education" element={<Education />}  />
 
            <Route path="/skills" element={<Skills />}  />
          <Route path="/works" element={<Projects />}  />
          <Route path="/projects" element={<ProjectsPage />}  />
          <Route path="/images" element={<ImagesPage/>} />
          <Route path="/social" element={<Social/>} />
          <Route  element={<NotFound/>} />
          

      
        
     
      </Routes>
      </Router>
      
    );
  }
}
export default App;