import { useState, useEffect } from "react";
// import allPeople from "./assets/data.json";

function List() {
  const [allPeople, setAllPeople] = useState(null);

  useEffect(() => {
    console.log("fetching list of all people");
    fetch("https://swapi.tech/api/people?page=1&limit=1000")
      .then((response) => response.json())
      .then((json) => setAllPeople(json))
      .catch((error) => console.error(error));
  }, []);

  const [people, setPeople] = useState([]);
  let count = 0;

  useEffect(() => {
    function addPerson(person) {
      setPeople([...people, person]);
    }

    console.log(`fetching ${count++} person...`);
    if (allPeople) {
      fetch(allPeople.results[0].url)
        .then((response) => response.json())
        .then((json) => addPerson(json))
        .catch((error) => console.error(error));
    }
  }, [allPeople, count, people]);

  return (
    <div>
      {/* {allPeople ? (
        <pre>{JSON.stringify(allPeople, null, 2)}</pre>
      ) : (
        "Loading..."
      )} */}
      {/* {allPeople ? <p>{allPeople.results[0].properties.name}</p> : 'No name'} */}
      {people.length > 0 ? (
        <p>{people[0].result.properties.name}</p>
      ) : (
        "No name"
      )}
    </div>
  );
}

export default List;
