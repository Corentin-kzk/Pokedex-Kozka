import React from "react";

const Button = ({name, onClick}) => {
  return (
    <>
      <div class="button" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {name}
      </div>
      <style jsx="true">{`
        .button {
            position: relative;
            display: inline-block;
            padding: 30px 61px;
            border-radius: 4px;
            color: #03e9f4;
            text-decoration: none;
            text-transform: uppercase;
            overflow: hidden;
            margin: 25px;
            font-family: "Roboto", sans-serif;
            filter: hue-rotate(0deg);
            border: 2px solid #d2bdff;
            transition: all 0.1s linear;
          }
          .button:hover {
            border: 1px solid transparent;
          }
          .button:hover span {
            position: absolute;
            display: block;
          }
          .button:hover span:nth-child(1) {
            filter: hue-rotate(0deg);
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #EE8130);
            animation: animate1 1s linear infinite;
          }
          @keyframes animate1 {
            0% {
              left: -100%;
            }
            50%, 100% {
              left: 100%;
            }
          }
          .button:hover span:nth-child(2) {
            filter: hue-rotate(60deg);
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #7AC74C);
            animation: animate2 1s linear infinite;
            animation-delay: 0.25s;
          }
          @keyframes animate2 {
            0% {
              top: -100%;
            }
            50%, 100% {
              top: 100%;
            }
          }
          .button:hover span:nth-child(3) {
            filter: hue-rotate(120deg);
            bottom: 0;
            right: 0;
            width: 100%;
            background: linear-gradient(270deg, transparent, #6390F0);
            animation: animate3 1s linear infinite;
            animation-delay: 0.5s;
          }
          @keyframes animate3 {
            0% {
              right: -100%;
              height: 3px;
            }
            50%, 100% {
              height: 2px;
              right: 100%;
            }
          }
          .button:hover span:nth-child(4) {
            filter: hue-rotate(300deg);
            bottom: -100%;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #A98FF3);
            animation: animate4 1s linear infinite;
            animation-delay: 0.75s;
          }
          @keyframes animate4 {
            0% {
              bottom: -100%;
            }
            50%, 100% {
              bottom: 100%;
            }
          }
      `}</style>
    </>
  );
};

export default Button;