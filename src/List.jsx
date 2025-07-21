import { useState, useEffect } from "react";
// import allPeople from "./assets/data.json";
import Card from "./Card";

function List() {
  const [peopleList, setPeopleList] = useState(null);

  useEffect(() => {
    let randNumbers = [];

    while (randNumbers.length < 12) {
      let rand = Math.floor(Math.random() * 81) + 1;
      if (randNumbers.indexOf(rand) < 0) {
        randNumbers.push(rand);
      }
    }

    console.log("fetching list of all people");
    fetch("https://swapi.tech/api/people?page=1&limit=100")
      .then((response) => response.json())
      .then((json) =>
        setPeopleList(
          json.results.filter(
            (person) => randNumbers.indexOf(Number(person.uid)) >= 0
          )
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card-container">
      {peopleList
        ? peopleList.map((person) => (
            <Card name={person.name} key={person.uid} />
          ))
        : "Loading..."}
    </div>
  );
}

export default List;
