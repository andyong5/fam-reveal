import React, { useEffect, useState } from "react";
import "./Loose.css";

function Loose() {
  const [name, setName] = useState("Andy Nguyen");

  useEffect(() => {
    setName("Andy Nguyen");
  }, []);

  return (
      <div class="center">
        <div class="nes-container is-rounded">
          <p class="title" id="welcome">
            <span class="loose">Welcome to Loose Fam!</span>
          </p>
          <div class="row">
            <i class="nes-squirtle i small flip"></i>
            <div class="vertical">
              <h1 class="loose" id="name">{name}</h1>
            </div>
            <i class="nes-squirtle i small"></i>
          </div>
          <br></br>
          <img src="./loose.gif"></img>
          <br></br>
        </div>
      </div>
  );
}

export default Loose;
