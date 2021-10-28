import React, { useEffect, useState } from "react";
import "./Test.css";

function Test() {
  const [name, setName] = useState("Andy Nguyen");

  useEffect(() => {
    setName("Andy Nguyen");
  }, []);

  return (
    <div class="work">
      <div class="center">
        <div class="nes-container is-rounded">
          <p class="title" id="welcome">
            <span class="tight">Welcome to Tight Fam!</span>
          </p>
          <div class="row">
            <i class="nes-charmander i small flip"></i>
            <div class="vertical">
              <h1 class="tight" id="name">
                {name}
              </h1>
            </div>
            <i class="nes-charmander i small"></i>
          </div>
          <br></br>
          <img src="./tight.gif"></img>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Test;
