import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pledges from "./Pledges";
import "./Add.css";

function Add() {
  const [pledges, setPledges] = useState([]);
  const [fam, setFam] = useState("Tight");
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputClass, setInputClass] = useState("nes-input");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const history = useHistory();
  function handleClick() {
    history.push("/");
  }

  useEffect((event) => {
    event.preventDefault();
    fetch("/pledges", {
      headers : {'Content-type': 'application/json'},
      method: "GET",
      'credentials': 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('got in useEffect')
        setPledges(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(name);
    const formData = new FormData();
    formData.append("fam", fam);
    formData.append("name", name);
    fetch("/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName("");
        setPledges([data, ...pledges]);
      })
      .catch((error) => {
        console.log(error);
        setName("");
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    fetch("/login", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        if (data.message === "Invalid Password") {
          console.log("Invalid Password");
          setError(true);
          setInputClass("nes-input is-error");
        } else {
          console.log("Set correct password");
          setError(false);
          setInputClass("nes-input");
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setInputClass("nes-input is-error");
      });
  };

  return (
    <div>
      <button class="nes-btn is-success margin" onClick={handleClick}>
        Back
      </button>
      <div class="work">
        <div class="center">
          <div class="nes-container is-rounded">
            <p class="title" id="welcome">
              Add Pledge
            </p>
            {isLoggedIn ? (
              <>
                <form class="add_cont" onSubmit={handleSubmission}>
                  <div class="row">
                    <div class="nes-field">
                      <label for="name_field">Pledge Name</label>
                      <input
                        type="text"
                        id="name_field"
                        class={"nes-input " + fam}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div class="nes-select select">
                      <label for="name_field">Family</label>
                      <select
                        id="default_select"
                        class={"narrow " + fam}
                        onChange={(e) => setFam(e.target.value)}
                        required
                      >
                        <option selected value="Tight" class="Tight">
                          Tight
                        </option>
                        <option value="Loose" class="Loose">
                          Loose
                        </option>
                        <option value="Close" class="Close">
                          Close
                        </option>
                      </select>
                    </div>
                  </div>
                  <button class="nes-btn is-success add_btn" type="submit">
                    Add Pledge
                  </button>
                </form>
                <Pledges pledges={pledges} setPledges={setPledges} />
              </>
            ) : (
              <div>
                <h1>Enter Password to View Page</h1>
                <form onSubmit={handleLogin}>
                  <div class="nes-field">
                    <label for="name_field">Password</label>
                    <input
                      type="password"
                      id="name_field"
                      class={inputClass}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    ></input>
                    {error ? (
                      <label class="nes-text is-error" id="error">
                        Wrong name. Please try again.
                      </label>
                    ) : null}
                    <button class="nes-btn is-success add_btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
