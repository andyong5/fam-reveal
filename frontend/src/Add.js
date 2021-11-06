import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pledges from "./Pledges";
import "./Add.css";

function Add() {
  const [pledges, setPledges] = useState([]);
  const [fam, setFam] = useState("Tight");
  const [name, setName] = useState("");

  const history = useHistory();
  function handleClick() {
    history.push("/");
  }

  useEffect(() => {
    fetch("/pledges")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPledges(data);
      })
      .catch((error) => {});
  }, []);

  const handleSubmission = (event) => {
    //event.preventDefault();
    console.log(name);
    const formData = new FormData();
    formData.append("fam", fam);
    formData.append("name", name);
    console.log(formData);
    fetch("/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setName("");
      })
      .catch((error) => {
        console.log(error);
        console.log('got in here')
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
            <form class="add_cont" onSubmit={handleSubmission}>
              <div class="row">
                <div class="nes-field">
                  <label for="name_field">Pledge Name</label>
                  <input type="text" id="name_field" class={"nes-input " + fam} onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div class="nes-select narrow">
                  <label for="name_field">Family</label>
                  <select id="default_select" class={"narrow " + fam} onChange={(e) => setFam(e.target.value)} required>
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
              <button type="button" class="nes-btn is-success add_btn" type="submit">
                Add Pledge
              </button>
            </form>
            <Pledges pledges={pledges} setPledges={setPledges}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
