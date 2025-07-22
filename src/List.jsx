import { useState, useEffect } from "react";
// import allPeople from "./assets/data.json";
import Card from "./Card";

function List() {
  const [peopleList, setPeopleList] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    let rand = Math.floor(Math.random() * (952 / 12)) + 1;

    console.log("fetching list of all people");
    fetch(
      `https://starwars-databank-server.vercel.app/api/v1/characters?page=${rand}&limit=2`
    )
      .then((response) => response.json())
      .then((json) =>
        setPeopleList(json.data.map((obj) => ({ ...obj, isClicked: false })))
      )
      .catch((error) => console.error(error));
  }, []);

  function handleClick(personId) {
    peopleList.filter((p) => p._id === personId)[0].isClicked = true;
  }

  return (
    <div className="card-container">
      {peopleList
        ? peopleList.map((person) => (
            <Card person={person} setClicked={handleClick} key={person._id} />
          ))
        : "Loading..."}
    </div>
  );
}

export default List;
