import React from 'react'
import { useState } from 'react';
export default function BasicForm() {
  const [name, setName] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" value={name} onChange={(e)=>SVGAnimateTransformElement(e.target.value)}/>
        <button type="submit">submit</button>
    </form>
  )
}

