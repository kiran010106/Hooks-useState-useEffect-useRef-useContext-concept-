import React, { useEffect, useState, useRef } from "react";

export default function Count() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log(count.current)
  });

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => 
          setInputValue(e.target.value)}
      />
      <h1> Render count : {count.current}</h1>
    </div>
  );
}
