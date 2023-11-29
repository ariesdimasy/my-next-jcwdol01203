"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=50")
      .then((res) => res.json())
      .then((res) => {
        console.log("res => ", res);
        setPhotos(res);
      });
  });

  return (
    <div>
      <h1>Photos </h1>
      <hr></hr>
      {photos?.map((item, index) => {
        return (
          <>
            <Image
              key={index}
              alt="thumbnail image "
              width={150}
              height={150}
              src={`/next.svg`}
            ></Image>
            <p key={index}>{item.thumbnailUrl}</p>
          </>
        );
      })}
    </div>
  );
}
