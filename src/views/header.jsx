import React, { useState } from "react";
import "../app.css";
import Aside from "./Aside";

const Header = ({ changeCollapse }) => {
  let onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
  };
  return (
    <>
      <header className="top_navbar">
        <div className="hamburger" onClick={changeCollapse}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="top_menu">
          <div className="logo">POKEDEX</div>

          <form className="searchBox" onSubmit={(e) => onSearchSubmit(e)}>
            <input
              className="searchInput"
              type="text"
              name="search"
              placeholder="Search"
            />
            <button className="searchButton" href="#">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </header>
      <Aside />
    </>
  );
};

export default Header;
