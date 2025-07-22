import { useState } from "react";
import "./styles/App.css";
import List from "./components/List.jsx";

function App() {
  return (
    <>
      <h1>Memory Game</h1>
      <p>
        Select a card to get a point, but don&apos;t select the same one twice
      </p>
      <List />
    </>
  );
}

export default App;
