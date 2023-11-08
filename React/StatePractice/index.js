import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  function sumarUno() {
    setCount(count + 1);
  }

  function restarUno() {
    setCount(count - 1);
  }

  return (
    <div className="claseGeneral">
      <button
        type="button"
        onClick={() => {
          sumarUno();
        }}
      >
        Sumar 1
      </button>
      <button
        type="button"
        onClick={() => {
          restarUno();
        }}
      >
        Restar 1
      </button>
      <p>{count}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
