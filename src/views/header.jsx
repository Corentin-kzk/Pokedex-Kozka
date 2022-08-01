import React from "react";
import "../app.css";
import Aside from "./Aside";

const Header = ({ changeCollapse }) => {
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
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Aside />
    </>
  );
};

export default Header;
