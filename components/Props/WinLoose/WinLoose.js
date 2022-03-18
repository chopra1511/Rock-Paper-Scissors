import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./WinLoose.css";

export default function WinLoose({ pChoice, cChoice }) {
  const [result, setResult] = useState(" ");
  const history = useHistory();

  useEffect(() => {
    if (pChoice === "Rock" && cChoice === "Scissors") setResult("YOU WIN!");
    if (pChoice === "Scissors" && cChoice === "Paper") setResult("YOU WIN!");
    if (pChoice === "Paper" && cChoice === "Rock") setResult("YOU WIN!");

    if (pChoice === "Scissors" && cChoice === "Rock") setResult("YOU LOOSE!");
    if (pChoice === "Paper" && cChoice === "Scissors") setResult("YOU LOOSE!");
    if (pChoice === "Rock" && cChoice === "Paper") setResult("YOU LOOSE!");

    if (pChoice === cChoice) setResult("TIE!");
  },[pChoice,cChoice]);

  return (
    <div className="results">
      <h1>{result}</h1>
      <button onClick={() => document.location.reload()}>Play again!</button>
      <button onClick={() => history.push("/")}>Change Mode</button>
    </div>
  );
}
