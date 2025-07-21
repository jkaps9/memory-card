import { useState, useEffect } from "react";
import allPeople from "./assets/data.json";
import Card from "./Card";

function List() {
  // const [allPeople, setAllPeople] = useState(null);

  // useEffect(() => {
  //   console.log("fetching list of all people");
  //   fetch("https://swapi.tech/api/people?page=1&limit=100")
  //     .then((response) => response.json())
  //     .then((json) => setAllPeople(json))
  //     .catch((error) => console.error(error));
  // }, []);

  let randNumbers = [];

  while (randNumbers.length < 12) {
    let rand = Math.floor(Math.random() * 81) + 1;
    if (randNumbers.indexOf(rand) < 0) {
      randNumbers.push(rand);
    }
  }

  return (
    <div>
      {allPeople ? (
        <ul>
          {allPeople.results
            .filter((person) => randNumbers.indexOf(Number(person.uid)) >= 0)
            .map((person) => (
              <Card name={person.name} key={person.uid} />
            ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default List;
