import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
export default function Track() {
    
    const [inputValue , setInputValue] = useState();
    const previousInputValue = useRef("")

    useEffect(() => {
       previousInputValue.current = inputValue;
    }, [inputValue]);

  return (
    <div>
      <input type="text"
       value={inputValue} 
       onChange={(e) =>
        {setInputValue(e.target.value)} }/>
      <h1>Current count:{inputValue}</h1>
      <h1>Previous count:{previousInputValue.current}</h1>
    </div>
  )
}
