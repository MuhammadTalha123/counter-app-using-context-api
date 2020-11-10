import React, { createContext } from 'react';
import Number from './Number';
import './App.css';
import Minus from './Minus';
import Add from './Add';

const Num = createContext();

function App() {
  return (
    <div className="App">
    <Num.Provider value='1'>
      <Number/>
      <Minus/>
      <Add/>
      </Num.Provider>  
    </div>
  );
}

export default App;
export { Num };
