import React from "react";
import "./app.css";
import "https://kit.fontawesome.com/b99e675b6e.js";
import { useState } from "react";
import Header from "./views/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

const App = () => {
  const [collapse, setCollapse] = useState(false);

  let changeCollapse = () => {
    let reverse = !collapse;
    setCollapse(reverse);
  };

  return (
    <BrowserRouter>
      <div className={collapse ? "wrapper" : "wrapper collapse"}>
        <Header changeCollapse={changeCollapse} />

        <div className="main_container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
