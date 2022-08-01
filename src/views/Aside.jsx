import React from "react";
import "../app.css";

const Aside = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fas fa-book"></i>
            </span>
            <span className="title">Listing</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fas fa-id-card"></i>
            </span>
            <span className="title">Pokedex</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
