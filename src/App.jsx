import React from "react";
import "./app.css";
import "https://kit.fontawesome.com/b99e675b6e.js";
import { useState } from "react";
import Header from "./views/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

const App = () => {
  const [collapse, setCollapse] = useState(false);
  const [search, setSearch] = useState("");

  //set Header collapse
  let changeCollapse = () => {
    let reverse = !collapse;
    setCollapse(reverse);
  };

  return (
    <BrowserRouter>
      <div className={collapse ? "wrapper" : "wrapper collapse"}>
        <Header changeCollapse={changeCollapse} setSearch={setSearch} />

        <div className="main_container">
          <Routes>
            <Route path="/" element={<Home search={search} />} />
            <Route path="/pokedex" element={<Pokedex search={search} />} />
            <Route
              path="/pokemon/:id"
              element={<Pokemon key={Math.floor(Math.random() * Date.now())} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
