import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ScotchInfoBar from "./ScotchInfoBar";

import "./styles.css";

function App() {
  const secret = "open sesame";

  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    if (phrase === secret) {
      alert("You may enter!");
    }
  });

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        placeholder="Super duper secret"
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
      />

      <p>
        Hint: It's <strong>{secret}</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
