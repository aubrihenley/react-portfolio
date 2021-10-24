import React from "react";
//import PortfolioContainer from "./components/PortfolioContainer";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import "./main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <router>
      <div className="App">
        <Header />
        <div className="content"></div>

        <Footer />
      </div>
    </router>
  );
};

export default App;
