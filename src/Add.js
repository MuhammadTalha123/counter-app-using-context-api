import React, { useContext } from 'react';
import { FunAdd } from './App';
function Add() {
    const addfun = useContext(FunAdd);
    return(
        <>
            <button onClick={()=>{
                addfun();
            }}>
                +
            </button>
        </>
    );
}
export default Add;