function ConditionalRendering({userActive}){
  return(
    <div className="conditional-rendering">
      <h1>Conditional Rendering</h1>
      <p>Conditional rendering in React allows you to render different UI elements based on certain conditions. This is often done using JavaScript expressions, such as if statements or ternary operators.</p>
      <p>For example, you can use a ternary operator to conditionally render a component based on a boolean value:</p>
      <p>{userActive?"Online":"Not Online"}</p>
      </div>
  )
}

function Issubcribe({Issubcribe}){
  return(
    <p>{Issubcribe?"Thank you for subscribing":"Please subscribe"}</p>
  )
}
export {Issubcribe};
export default ConditionalRendering;