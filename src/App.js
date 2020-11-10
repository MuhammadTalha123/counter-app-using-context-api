import React, { createContext, useState } from 'react';
import Number from './Number';
import './App.css';
import Minus from './Minus';
import Add from './Add';

const Num = createContext();

function App() {
  const [number, setnumber] = useState(0);

  function minus() {
    setnumber(number - 1);
  }

  function plus() {
    setnumber(number + 1);
  }

  return (
    <div className="App">
    <Num.Provider value={number}>
      <Number/>
      <Minus/>
      <Add/>
      </Num.Provider>  
    </div>
  );
}

export default App;
export { Num };
