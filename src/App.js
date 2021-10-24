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
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </router>
  );
};

export default App;
