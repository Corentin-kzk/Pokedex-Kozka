import React from "react";
import "../app.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <i className="fas fa-book"></i>
            </span>
            <span className="title">Listing</span>
          </Link>
        </li>
        <li>
          <Link to="/pokedex">
            <span className="icon">
              <i className="fas fa-id-card"></i>
            </span>
            <span className="title">Pokedex</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
