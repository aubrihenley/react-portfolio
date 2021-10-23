import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./main.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <PortfolioContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
