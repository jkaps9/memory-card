import { useState, useEffect } from "react";
import "./styles/Card.css";

function Card({ person }) {
  return (
    <div className="card">
      <div className="imgPlaceholder">
        <img
          src={person.image}
          alt={person.name}
          width="100%"
          height="100%"
        ></img>
      </div>
      <p>{person.name}</p>
    </div>
  );
}

export default Card;
