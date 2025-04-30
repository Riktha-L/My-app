import { useState } from "react";
function FavColor(){
  //let color = "Red";
  const [color,setColor]=useState('Red');
  return(
    <>
    <h1>My Fav Color is {color}</h1>
    <button onClick={()=>{
      setColor('Blue');
    }}>Change Color</button>
    </>
  )
}
export default FavColor;