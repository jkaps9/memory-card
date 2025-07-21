import { useState, useEffect } from 'react'

function List() {
	const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/1")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
     {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
	  /*{data ? <p>{data.results[0].properties.name}</p> : 'No name'}*/
    </div>
  );
}

export default List





