import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./BookMark.css";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";
import Button from "../button/Button";
import { add, remove } from "../../reducer/pokedexReducer";
import { useDispatch } from "react-redux";

const BookMark = ({ isPresent, pokemon }) => {
  const dispatch = useDispatch();
  const savedInPokedex = () => {
    if (isPresent) {
      toggle();
    } else {
      dispatch(add(pokemon));
    }
  };

  const { isShowing: Showed, toggle: toggle } = useModal();

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
          <Button
            name={"YES"}
            onClick={() => {
              dispatch(remove(pokemon));
              toggle();
            }}
          />
          <Button name={"NO"} onClick={toggle} />
        </div>
      </Modal>
      <div className="pokedex-bookmark">
        <FontAwesomeIcon
          className={isPresent ? "active" : ""}
          icon={faBookmark}
          onClick={() => {
            savedInPokedex();
          }}
        />
      </div>
    </>
  );
};

export default BookMark;
