import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Buttons from "./components/Buttons";

function App() {
  const [characterList, setCharacterList] = useState([]);

  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((rest) => rest.json())
      .then((rest) => setCharacterList(rest.results))
      .catch((err) => console.log(err));
  }, [next]);

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
        <Buttons next={next} setNext={setNext} />
      </header>
    </div>
  );
}

export default App;
