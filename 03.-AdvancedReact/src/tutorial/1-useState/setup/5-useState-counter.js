import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0);
  
  const complexIncrease = () =>{
    setTimeout(()=>{
      // setValue(value+1);
      setValue((prevState)=>{
        return prevState+1;
      } )
    },2000);
  }
  return (
    <React.Fragment>
      <section style={{margin: '4rem 0'}}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setValue(value-1)}>decrease</button>
        <button className='btn' onClick={()=>setValue(0)}>reset</button>
        <button className='btn' onClick={()=>setValue(value+1)}>increase</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase Later</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
