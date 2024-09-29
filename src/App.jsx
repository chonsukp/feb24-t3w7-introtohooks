import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [bananas, setBananas] = useState("cool bananas");

  const [readData, setData] = useState({name: "A name", otherValue: ""});

  const [pokemonName, setpokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState(""); 

  useEffect(() => {
    console.log("Hello from the start of the component eg. componentDidMount");

    const getPokemonData = async () => {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025) + 1}`).then(response => response.json());
  
      // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025) + 1}`);
      // let data = await response.json();
  
      setpokemonName(result.Name);
      setPokemonImage(result.sprites.front_default);
    }

    getPokemonData();

    return(() => {
      console.log("Component will unmount now.");
    })
  }, []);

  useEffect(() => {
    console.log(`Retrieve Pokemon Data: name ${pokemonName}, image: ${pokemonImage}`);
  }, [pokemonName, pokemonImage]);

  // useEffect(callback, dependencyArray);

  useEffect(() => {
    console.log(`Count is no ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`bananas: ${bananas}, readData: ${JSON.stringify(readData)}`);
  }, [bananas, readData]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>{JSON.stringify(readData)}</p>
      <p>{readData.name}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
