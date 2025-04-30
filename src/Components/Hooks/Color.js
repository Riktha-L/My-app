import React, { useState } from 'react';
function Color(){
  const [color, setColor] = useState("red");
  const changeColor=()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor(`#${randomColor}`);
  }
  return(
    <>
    <h1 style={{color:color}}>Color is {color}</h1>
    <button onClick={changeColor}>
      Change Color
    </button>
    </>
  )
}
export default Color;