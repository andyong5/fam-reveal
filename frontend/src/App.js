import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("")

  useEffect(() => {
    setName("");
  },[]);

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(name)
    const formData = new FormData();
    formData.append('name', name)
    console.log(formData);
    fetch("/reveal", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log('error')
      });
  };


  return (
    <div class="middle">
      <div class="center">
        <br></br>
        <div class="nes-container with-title is-centered">
          <p class="title" id="welcome">
            Welcome to Fam Reveal
          </p>
          <form class="container" onSubmit={handleSubmission}>
            <label>Choose your family:</label>
            <div>
              <i class="nes-bulbasaur is-small"></i>
              <i class="nes-charmander is-small"></i>
              <i class="nes-squirtle is-small"></i>
            </div>
            <br></br>
            <div class="nes-field">
              <input
                type="text"
                class="nes-input"
                placeholder="Your Name"
                onChange={e => setName(e.target.value)}
                required
              ></input>
              <br></br>
            </div>
            <button type="button" class="nes-btn is-success" type="submit">
              Reveal!
            </button>
          </form>
          <i class="nes-pokeball is-small"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
