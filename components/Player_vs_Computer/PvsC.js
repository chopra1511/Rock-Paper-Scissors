import React, { useState } from "react";
import "./PvsC.css";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import WinLoose from "../Props/WinLoose/WinLoose";

export default function PvsC(props) {
  const [pChoice, setPChoice] = useState(null);
  const [cChoice, setCChoice] = useState(null);
//   const [timer, setTimer] = useState(5);

  const image = {
    Rock: rock,
    Paper: paper,
    Scissors: scissors,
  };

  //   const list = [rock, paper, scissors];
  //   const computerChoice = list[Math.floor(Math.random(list) * list.length)];
  //
  console.log(pChoice);
  console.log(cChoice);

  return (
    <div className="pvsc">
      <div className="game_pc">
        {/* <div className="moves comp">
            <img src={} alt={} />
          </div> */}

        {cChoice ? (
          <img className="choice comp" src={image[cChoice]} alt="cchoice" />
        ) : (
          <div className="timer">
            <h1>5</h1>
            <p>Timer</p>
          </div>
        )}

        {pChoice && cChoice ? (
          <WinLoose pChoice={pChoice} cChoice={cChoice} />
        ) : (
          <div className="game_details">
            <h1>Computer</h1>
            <hr />
            <h1>Player</h1>
          </div>
        )}
        <div className="moves">
          {pChoice ? (
            <img className="choice" src={image[pChoice]} alt="pchoice" />
          ) : (
            <div className="imgs">
              <h3>Choose Your Move</h3>
              {Object.keys(image).map((a) => (
                <img
                  key={a}
                  src={image[a]}
                  id="rock"
                  alt="rock"
                  onClick={() => {
                    setPChoice(a);
                    let c = Object.keys(image)[Math.floor(Math.random() * 3)];
                    setCChoice(c);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* 
 if (user === "rock" && computerChoice === "scissors")
      console.log("You win");
    if (user === "scissors" && computerChoice === "paper")
      console.log("You win");
    if (user === "paper" && computerChoice === "rock") console.log("You win");

    if (user === "scissors" && computerChoice === "rock")
      console.log("You Loose");
    if (user === "paper" && computerChoice === "scissors")
      console.log("You Loose");
    if (user === "rock" && computerChoice === "paper") console.log("You Loose");

    if (user === computerChoice) console.log("Draw");

*/
