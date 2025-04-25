 function Details({name,email,Premium}){
  return(
    <p>Name: {name} , Email: {email} , {Premium ? "Star" : ""}</p>
  )
 }
  export default Details;