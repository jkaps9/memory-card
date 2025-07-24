import { useState, useEffect } from "react";
// import allPeople from "./assets/data.json";
import Card from "./Card";
import "../styles/Modal.css";

function List() {
  const [peopleList, setPeopleList] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let rand = Math.floor(Math.random() * (952 / 12)) + 1;

    console.log("fetching list of all people");
    fetch(
      `https://starwars-databank-server.vercel.app/api/v1/characters?page=${rand}&limit=12`
    )
      .then((response) => response.json())
      .then((json) =>
        setPeopleList(json.data.map((obj) => ({ ...obj, isClicked: false })))
      )
      .catch((error) => console.error(error));
  }, []);

  function handleClick(personId) {
    const person = peopleList.filter((p) => p._id === personId)[0];
    if (!person.isClicked) {
      person.isClicked = true;
      reorderList();
      setCurrentScore(currentScore + 1);
    } else {
      setIsPlaying(false);
    }
  }

  function playAgainClick() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    resetList();
    reorderList();
    setIsPlaying(true);
  }

  function reorderList() {
    const updatedList = [...peopleList];
    for (let i = updatedList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [updatedList[i], updatedList[j]] = [updatedList[j], updatedList[i]];
    }
    setPeopleList(updatedList);
  }

  function resetList() {
    const updatedList = [...peopleList];
    updatedList.map((item) => (item.isClicked = false));
    setPeopleList(updatedList);
  }

  function resetAll() {
    resetList();
    reorderList();
    setCurrentScore(0);
    setBestScore(0);
  }

  return (
    <>
      <div className="score-container">
        <div style={{ textAlign: "start" }}>
          <div>Score: {currentScore}</div>
          <div>Best Score: {bestScore}</div>
        </div>
        <button onClick={resetAll}>Reset Scores</button>
      </div>
      <div className="card-container">
        {peopleList
          ? peopleList.map((person) => (
              <Card person={person} setClicked={handleClick} key={person._id} />
            ))
          : "Loading..."}
        {isPlaying ? (
          <></>
        ) : (
          <div className="game-over-modal">
            <h3>Game Over</h3>
            {currentScore === peopleList.length ? (
              <>
                <p>You got them all!</p>
                <p>The Force will be with you always!</p>
              </>
            ) : currentScore > bestScore ? (
              <>
                <p>You beat your best score.</p>
                <p>Great, kid! Don't get cocky.</p>
              </>
            ) : (
              <>
                <p>You didn't beat your best score.</p>
                <p>Do or do not. There is no try.</p>
              </>
            )}
            <button onClick={playAgainClick}>Play Again</button>
          </div>
        )}
      </div>
    </>
  );
}

export default List;
