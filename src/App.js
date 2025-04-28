import React from 'react';
import ConditionalRendering, { Issubcribe } from './Components/Conditional_Rendering';

function App() {
  return (
    <div>
    <ConditionalRendering>userActive={true}</ConditionalRendering>
    <Issubcribe>Issubcribe={true}</Issubcribe>
    </div>
  );
}

export default App;
