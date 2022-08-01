import React from "react";
import "./app.css";
import "https://kit.fontawesome.com/b99e675b6e.js";
import { useState } from "react";
import Header from "./views/header";
import CardContainer from "./Components/cardPokedex/CardContainer";

const App = () => {
  const [collapse, setCollapse] = useState(false);

  let changeCollapse = () => {
    let reverse = !collapse;
    setCollapse(reverse);
  };

  return (
    <div className={collapse ? "wrapper" : "wrapper collapse"}>
      <Header changeCollapse={changeCollapse} />

      <div className="main_container">
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
