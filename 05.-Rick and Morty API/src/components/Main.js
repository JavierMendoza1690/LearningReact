import React, { useEffect, useState } from "react";
import { useGetData } from "./useGetData";
const Initialurl = "https://rickandmortyapi.com/api/character";


function Main({results}) {


  

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {results.map((character, index) => {
            return (
              <div key={index} className="col mb-4">
                <div className="card" style={{ minWidth: "200px" }}>
                  <img src={character.image} alt={character.name} />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <hr />
                    <p>location: {character.species}</p>
                    <p>location: {character.location.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
