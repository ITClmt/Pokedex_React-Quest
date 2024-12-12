interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, i) => (
          <button
            type="button"
            key={pokemon.name}
            onClick={() => setPokemonIndex(i)}
          >
            {pokemon.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
