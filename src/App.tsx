import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [count, setCount] = useState(0);

  const handlePreviousClick = () => {
    setCount(count - 1);
  };

  const handleNextClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[count]} />
      {count > 0 ? (
        <button type="button" onClick={handlePreviousClick}>
          Précédent
        </button>
      ) : null}
      {count < pokemonList.length - 1 ? (
        <button type="button" onClick={handleNextClick}>
          Suivant
        </button>
      ) : null}
    </div>
  );
}

export default App;
