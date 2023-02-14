import React from 'react'
import React, {useState , useContext} from 'react';


let context = React.createContext(null);
export default function ParentW() {
    const [fName , setfName] = useState("First Nmae")
    const [lName , setlName] = useState("Last Nmae")

  return (
    <context.Provider value = {{ fName , lName}} >
    <div> This is  a Parent Component</div>
    <br />
    <ChildA />
    </context.Provider>
  );
}

function ChildA() {
    return(
        <div>
            This is ChildA Component.
            <br />
            <ChildB />
        </div>
    )
}

function ChildB() {
    return(
        <div>
            This is ChildB Component.
            <br />
            <ChildC />
        </div>
    )
}

function ChildC() {
    return(
        <div>
            This is ChildC Component.
            <br />
            <h3>Data from the Parent Component is as follows :</h3>
            <h4>{ fName }</h4>
            <h4>{ lName }</h4>
        </div>
    )
}