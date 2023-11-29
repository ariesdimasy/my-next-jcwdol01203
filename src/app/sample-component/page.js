"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ComponentA = dynamic(() => import("./../../components/ComponentA"));
const ComponentB = dynamic(() => import("./../../components/ComponentB"));

export default function Page() {
  const [showMore, setShowmore] = useState(false);

  return (
    <div>
      <h1> Sample Component </h1>
      <ComponentA />
      {showMore && <ComponentB />}

      <button onClick={() => setShowmore(!showMore)}> Show More </button>
    </div>
  );
}
