import React from 'react';

class Bike extends React.Component{
  constructor(){
    super();
    this.state={color:"red"};
  }
  render(){
    return(
    <>
    <h1>My bike color is {this.state.color}</h1>
    <button onClick={()=>{
      this.setState({color:"blue"});
    }}>Change Color</button>
    </>
    );
  }
}
export default Bike;