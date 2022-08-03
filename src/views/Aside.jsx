import React from "react";
import "../app.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faBook } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  const pokedex = useSelector((state) => state.pokedex);
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span className="title">Listing</span>
          </Link>
        </li>
        <li>
          <Link to="/pokedex">
            <span className="icon">
              <FontAwesomeIcon icon={faIdCard} />
              {pokedex.length >= 1 && pokedex.length}
            </span>
            <span className="title">Pokedex</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
