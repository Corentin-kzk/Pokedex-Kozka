import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import pokeBall from "../../assets/pokeBall.svg";
import { useDispatch } from "react-redux";
import { add, remove } from "../../reducer/pokedexReducer";
import "https://kit.fontawesome.com/b99e675b6e.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";
import Button from "../button/Button";

const getTheId = (url) => {
  let splitedUrl = url.split("/").map((element) => element.trim());
  return splitedUrl[6];
};

const Card = ({ pokemon }) => {
  const { isShowing: Showed, toggle: toggle } = useModal();
  const pokedex = useSelector((state) => state.pokedex);

  const dispatch = useDispatch();
  const isPresent = pokedex.find((pokedex) => pokedex.name === pokemon.name);

  const savedInPokedex = () => {
    if (isPresent) {
      toggle();
    } else {
      dispatch(add(pokemon));
    }
  };
  const id = getTheId(pokemon.url);

  return (
    <>
      <Modal isShowing={Showed} hide={toggle} title="Confirm Delete">
        <p style={{ lineHeight: 5, letterSpacing: "2px" }}>
          Are you sure you want release{" "}
          <span style={{ fontWeight: "bolder", color: "red" }}>
            {pokemon.name}
          </span>
          ?{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button name={"YES"} onClick={() => dispatch(remove(pokemon))} />
          <Button name={"NO"} onClick={toggle} />
        </div>
      </Modal>
      <div className="card">
        <h2 className="card-title">{pokemon.name}</h2>
        <img
          className="image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon Image"
        />
        <Link className="detail-btn" to={`/pokemon/${id}`}>
          <div className="detail-div">
            <img className="button-more" src={pokeBall} alt="Details Button" />
            <span>Details</span>
          </div>
        </Link>
        <div className="pokedex-bookmark">
          <FontAwesomeIcon
            className={isPresent ? "active" : ""}
            icon={faBookmark}
            onClick={() => {
              savedInPokedex();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
