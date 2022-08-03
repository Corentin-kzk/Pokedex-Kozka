import React, { useState } from "react";
import "../app.css";
import Aside from "./Aside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ changeCollapse, setSearch }) => {
  let handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
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

          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name="search"
              placeholder="Search"
                onChange={(e) => handleChange(e)}
            />
            <button className="searchButton" href="#">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </header>
      <Aside />
    </>
  );
};

export default Header;
