import React, { useState, useEffect } from "react";
import "../app.css";
import Aside from "./Aside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import pokeball from "../assets/pokeBall.svg"

const Header = ({ changeCollapse, setSearch }) => {
  const [isPokemonPage, setIsPokemonPage] = useState(null);

  const location = useLocation();
  console.log(location.pathname);
  let splitedUrl = location.pathname
    .split("/")
    .map((element) => element.trim());
  useEffect(() => {
    if (splitedUrl[1] === "pokemon") {
      setIsPokemonPage(true);
    }else {
      setIsPokemonPage(false);
    }
  }, [location]);

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
          <div className="logo-image"><img src={pokeball} alt="" /></div>
          {!isPokemonPage && (
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
          )}
        </div>
      </header>
      <Aside />
    </>
  );
};

export default Header;
