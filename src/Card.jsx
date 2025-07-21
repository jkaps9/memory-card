import { useState, useEffect } from "react";

function Card({ name }) {
  return (
    <div className="card">
      <div className="imgPlaceholder"></div>
      <p>{name}</p>
    </div>
  );
}

export default Card;
