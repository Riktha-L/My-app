import { useState } from "react";

function Scooter(){
  const [color, setColor] = useState("red");
  const [model, setModel] = useState("Xiaomi");
  const [price, setPrice] = useState(500);
  const [speed, setSpeed] = useState(25);
  return(
  <>
  <h1>Scooter</h1>
  <p>Color:{color}</p>
  <p>Model:{model}</p>
  <p>Price:{price}</p>
  <p>Speed:{speed}</p>
  </>
  )
}
export default Scooter;