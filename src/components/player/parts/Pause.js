import React from "react";
import { CloseSquare } from "react-iconly";

export default function Pause({ handleClick }) {
  
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <CloseSquare set="bold" primaryColor="#FFFFFF"/>
    </button>
  );
}