"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1 className="heading"> Counter </h1>
      <hr></hr>
      <button className="button" onClick={() => setCounter(counter - 1)}>
        {" "}
        Decrement{" "}
      </button>
      <h2 className="heading">{counter}</h2>
      <button className="button" onClick={() => setCounter(counter + 1)}>
        {" "}
        Increment{" "}
      </button>
    </div>
  );
}
