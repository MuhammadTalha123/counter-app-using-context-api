import React, { useContext } from 'react';
import { FunMin } from './App';
function Minus() {
    const minfun = useContext(FunMin);
    return(
        <>
            <button onClick={()=>{
                minfun();
            }}>
                -
            </button>
        </>
    );
}
export default Minus;