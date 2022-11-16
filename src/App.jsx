import { useState } from "react";
import axios from "axios"
import Card from "./components/Card"
import { useEffect } from "react";
import { useCallback } from "react";
import "./App.css"

const App = () => {
  const [personagem, setPersonagem] = useState("");

  useEffect(() => {
    api();
  }, [])

  const api = useCallback(async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setPersonagem(res.data);
      })
      .catch(() => {
        console.log("first")
      });
  }, []);


  return (
    <div className="App">
      <div className="title">
        <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" />
      </div>
      <div className="container">
        {personagem &&
          personagem.results.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              image={person.image}
              status={person.status}
            />
          ))
        }
      </div>
    </div>

  )
}



export default App;


