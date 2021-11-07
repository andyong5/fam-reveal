import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [inputClass, setInputClass] = useState("nes-input");
  const history = useHistory();

  useEffect(() => {
    console.log('got called in useEffect')
    fetch("/pledges")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  }, []);

  const handleSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    fetch("/reveal", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if ("message" in data) {
          setError(true);
          setInputClass("nes-input is-error");
        } else {
          console.log(data);
          setError(false);
          setInputClass("nes-input");
          history.push("/reveal", { params: data });
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };


  return (
    <div>
      <button class="nes-btn is-success margin" onClick={() => history.push('/add')}>
        Admin Page
      </button>
      <div class="work">
        <div class="center">
          <div class="nes-container is-rounded">
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
                  class={inputClass}
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
                {error ? (
                  <label class="nes-text is-error" id="error">
                    Wrong name. Please try again.
                  </label>
                ) : null}
              </div>
              <button class="nes-btn is-success reveal_btn" type="submit">
                Reveal!
              </button>
              <i class="nes-pokeball is-small"></i>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
