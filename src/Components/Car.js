function car(){
  return(
    <div className="car">
      <h1>Car</h1>
      <p>This is a car component.</p>
      </div>
  )
}
function Greeting({name,age}){
  return(
    <p>Hello My name is {name}! and my age is {age}</p>
  )
}
export default car;
export { Greeting };