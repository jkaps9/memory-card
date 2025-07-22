import { useState, useEffect } from "react";
// import allPeople from "./assets/data.json";
import Card from "./Card";

function List() {
  const [peopleList, setPeopleList] = useState(null);

  useEffect(() => {
    let randNumbers = [];

    while (randNumbers.length < 12) {
      let rand = Math.floor(Math.random() * 952);
      if (randNumbers.indexOf(rand) < 0) {
        randNumbers.push(rand);
      }
    }

    console.log("fetching list of all people");
    fetch(
      "https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=952"
    )
      .then((response) => response.json())
      .then((json) => setPeopleList(json.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card-container">
      {peopleList
        ? peopleList.map((person) => (
            <Card imgUrl={person.image} name={person.name} key={person._id} />
          ))
        : "Loading..."}
    </div>
  );
}

export default List;
