import { useState, useEffect } from "react";
import "./styles/Card.css";

function Card({ name }) {
  return (
    <div className="card">
      <div className="imgPlaceholder"></div>
      <p>{name}</p>
    </div>
  );
}

export default Card;
