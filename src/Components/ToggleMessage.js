import React from "react";
import { useState } from "react";
function ToggleMessage() {
  const [message,setmessage]=useState("Hello, welcome!");
  const [isToggled, setIsToggled] = useState(true);
  const ToggleMessage=()=>{
    setIsToggled(!isToggled);
    if(isToggled){
      setmessage("Goodbye, see you again!");
    }else{
      setmessage("Hello, welcome!");
    }
  }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={ToggleMessage}>
        {isToggled ? "Toggle to Goodbye" : "Toggle to Hello"}
      </button>
    </div>
  );
}
export default ToggleMessage;