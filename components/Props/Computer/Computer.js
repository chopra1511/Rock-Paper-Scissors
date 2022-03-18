import React, {useState} from 'react'
import './Computer.css';
 import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import WinLoose from '../WinLoose/WinLoose';




export default function Computer() {
    const [pChoice, setPChoice] = useState(null);
    const [cChoice, setCChoice] = useState(null);

    const image = {
        Rock: rock,
        Paper: paper,
        Scissors: scissors,
    };


    console.log(pChoice);
    console.log(cChoice);

  return (
    <div className="pvsc">
      <div className="game_pc">
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
            <h1>Computer</h1>
          </div>
        )}
        <div className="moves">
          {pChoice ? (
            <img className="choice" src={image[pChoice]} alt="pchoice" />
          ) : (
            <div className="imgs">
              <button
                onClick={() => {
                  let a = Object.keys(image)[Math.floor(Math.random() * 3)];
                  setPChoice(a);
                  let c = Object.keys(image)[Math.floor(Math.random() * 3)];
                  setCChoice(c);
                }}
              >
                Start
              </button>
              <br />
              {Object.keys(image).map((a) => (
                <img key={a} src={image[a]} id="rock" alt="rock" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
