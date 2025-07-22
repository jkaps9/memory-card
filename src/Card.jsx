import { useState, useEffect } from "react";
import "./styles/Card.css";

function Card({ person, setClicked }) {
  return (
    <div className="card" onClick={() => setClicked(person._id)}>
      <div
        className="imgPlaceholder"
        style={{ backgroundImage: `url(${person.image})` }}
      ></div>
      <p>{person.name}</p>
    </div>
  );
}

export default Card;
