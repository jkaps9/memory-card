import { useState, useEffect } from "react";
import "./styles/Card.css";

function Card({ person }) {
  return (
    <div className="card">
      <div
        className="imgPlaceholder"
        style={{ backgroundImage: `url(${person.image})` }}
      ></div>
      <p>{person.name}</p>
    </div>
  );
}

export default Card;
