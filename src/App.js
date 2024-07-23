import "./App.css";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import CardComp from "./components/Card";
import { useEffect, useRef, useState } from "react";
function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState("pikachu"); //for storing the name of the pokemon
  const [data, setData] = useState([]); //for storing the json data
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  function handleChange(pokemon) {
    setPokemon(pokemon);
  }
  useEffect(() => {
    if (pokemon) {
      fetch(url + pokemon)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setData(null);
        });
    }
  }, [pokemon]);

  return (
    <ChakraProvider>
      <div className="App">
        <SearchBar
          inputRef={inputRef}
          inputValue={pokemon}
          handleChange={handleChange}
        />
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <CardComp inputValue={pokemon} data={data} />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
