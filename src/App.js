import React, { createContext, useState } from 'react';
import Number from './Number';
import './App.css';
import Minus from './Minus';
import Add from './Add';

const Num = createContext();
const FunAdd = createContext();
const FunMin = createContext();

function App() {
  const [number, setnumber] = useState(0);

  function minus() {

    if(number==0) {
      alert('Zero limit reached');
    } else {
      setnumber(number - 1);
    }
  }

  function plus() {
    setnumber(number + 1);
  }

  return (
    <div className="App">
    <Num.Provider value={number}>
    <FunAdd.Provider value={plus}>
    <FunMin.Provider value={minus}>
      <Number/>
      <Minus/>
      <Add/>
      </FunMin.Provider>
      </FunAdd.Provider>
      </Num.Provider>  
    </div>
  );
}

export default App;
export { Num, FunMin, FunAdd };
