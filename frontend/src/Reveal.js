import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Reveal.css";

function Reveal() {
  const [name, setName] = useState("");
  const [fam, setFam] = useState("");
  const [pokemon, setPokemon] = useState("");
  const history = useHistory();
  const location = useLocation();
  const data = location.state.params;

  useEffect(() => {
    setName(data.name)
    setFam(data.fam)
    if (fam === "Tight") {
      setPokemon("nes-charmander");
    }
    if (fam === "Loose") {
      setPokemon("nes-squirtle");
    }
    if (fam === "Close") {
      setPokemon("nes-bulbasaur");
    }
  });

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      <button class="nes-btn is-success margin" onClick={handleClick}>Back</button>
      <div class="work">
        <div class="center">
          <div class="nes-container is-rounded">
            <p class="title" id="welcome">
              <span class={fam}>Welcome to {fam} Fam!</span>
            </p>
            <div class="row">
              <i class={pokemon + " flip"}></i>
              <div class="vertical">
                <h1 class={fam} id="name">
                  {name}
                </h1>
              </div>
              <i class={pokemon}></i>
            </div>
            <br></br>
            <img src={"./" + fam + ".gif"} alt={fam}></img>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reveal;
