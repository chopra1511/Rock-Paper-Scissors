import React from 'react'
import { useHistory } from 'react-router-dom';
import './Mode.css'

export default function Mode() {
    const history = useHistory();
  return (
    <div className="mode">
      <div className="mode_type">
        <h1>Select Play Mode</h1>
        <button onClick={() => history.push("/pc")}>Player vs Computer</button>
        <br />
        <button onClick={() => history.push("/cc")}>
          Computer vs Computer
        </button>
      </div>
    </div>
  );
}
