import React, { useEffect, useState } from "react";
import './Close.css';

function Close() {
  const [name, setName] = useState("Andy Nguyen")

  useEffect(() => {
    setName("Andy Nguyen");
  },[]);


  return (
      <div class="center">
        <div class="nes-container is-rounded">
          <p class="title" id="welcome">
            <span class="close">Welcome to Tight Fam!</span>
          </p>
          <div class="row">
            <i class="nes-bulbasaur i small flip"></i>
            <div class="vertical">
              <h1 class="close" id="name">{name}</h1>
            </div>
            <i class="nes-bulbasaur i small"></i>
          </div>
          <br></br>
          <img src="./close.gif"></img>
          <br></br>
        </div>
      </div>
  );
}

export default Close;
