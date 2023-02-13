import { useRef } from "react";
import React from 'react'


export default function Render() {

const inputElement = useRef();

const FocusInput = () => {
    inputElement.current.focus();
    console.log(inputElement.current.focus)
};

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={FocusInput}>Focus input</button>
    </div>

  )
}
