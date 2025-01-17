import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [dogList, setDogList] = useState(0);
  const [error, setError] = useState(null);

  console.log(dogList);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breed/mix/images/random/20"
        );
        const result = await response.json();
        setDogList(result.message);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Dog CEO API</h1>
      {dogList &&
        dogList.map((dog, idx) => {
          return <img key={idx} src={dog} alt="random dog image" />;
        })}
    </>
  );
}

export default App;
