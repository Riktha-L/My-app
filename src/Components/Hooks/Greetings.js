import React, { useState } from 'react';
function Greet({name}){
  const [greeting,setGreeting] = useState("Hello {name}");
  const changeName=()=>{
    setGreeting(`Hello ${name}`);
  }
  return(
    <>
    <h1>{greeting}</h1>
    <button onClick={changeName}>
      Change Name
    </button>
    </>
  )
}
export default Greet;