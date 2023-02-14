import React, { useState } from 'react'

export default function ParentWO() {
  
   const [fName , setfName] = useState("First Nmae")
   const [lName , setlName] = useState("Last Nmae")

  return (
    <div>
      <div>This is a Parent Component</div>
      <br />
      <ChildA fName = {fName} lName = {lName} />
    </div>
  )
}

function ChildA({ fName , lName }) {
  return(
    <div>
      This is ChildA Componnent.
      <br />
      <ChildB fName = {fName} lName = {lName} />
    </div>
  )
}

function ChildB({ fName , lName }) {
  return(
    <div>
      This is ChildB Componnent.
      <br />
      <ChildC fName = {fName} lName = {lName} />
    </div>
  )
}

function ChildC({ fName , lName }) {
  return(
    <div>
      This is ChildC Componnent.
      <br />
      <h3> Data from the parent component is as follows :</h3>
      <h4> {fName} </h4>
      <h4> {lName} </h4>
    </div>
  )
}