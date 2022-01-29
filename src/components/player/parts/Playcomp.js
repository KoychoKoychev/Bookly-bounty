import React from "react";
import { Play } from "react-iconly";


export default function Playcomp({ handleClick }) {

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <Play set="bold" primaryColor="#FFFFFF"/>
    </button>
  );
}