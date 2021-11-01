// import React, { useState, useEffect } from "react";
import "./Pledges.css";

function Pledges({ pledges, setPledges }) {
  const deleteRow = (event) =>{
    
  }
  const deleteAll = (event) =>{
    fetch("/delete", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPledges([])
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div class="row">
        <div class="vertical">
          <h2>List of Pledges</h2>
        </div>
        <button type="button" class="nes-btn is-error" id="delete_all" onClick={deleteAll}>
          Delete All
        </button>
      </div>
      <div class="row">
        <div class="nes-table-responsive tableFixHead">
          <table class="nes-table is-bordered is-centered">
            <thead>
              <tr>
                <th>Pledge</th>
                <th>Family</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {pledges.map(({ name, family}, index) => {
                return (
                  <tr key={index} class={family}>
                    <td>
                      {index+1}.{name}
                    </td>
                    <td class="center_fam">{family}</td>
                    <td>
                      <button type="button" class="nes-btn is-error">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pledges;
