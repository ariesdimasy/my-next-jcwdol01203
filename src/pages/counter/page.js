"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1> Counter </h1>
      <hr></hr>
      <button onClick={() => setCounter(counter - 1)}> Decrement </button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}> Increment </button>
    </div>
  );
}
