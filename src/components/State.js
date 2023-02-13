import React, { useState } from "react";

export default function State() {
  const [changeValue, setChangeValue] = useState("");
  const onChange = (e) => {
    const newVal = e.target.value;
    setChangeValue(newVal);
  };
  return (
    <div>
      <h1>{changeValue}</h1>
      <input type="text" value={changeValue} onChange={onChange} />
    </div>
  );
}