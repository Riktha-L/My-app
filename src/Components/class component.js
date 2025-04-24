import react from 'react';

class Apple extends react.Component{
  render(){
    return(
      <div className="apple">
        <h1>Apple</h1>
        <p>Apple is a fruit that is sweet and crunchy.</p>
        <img src="https://example.com/apple.jpg" alt="Apple" />
      </div>
    )
  }
}
export default Apple;