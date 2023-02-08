import Proptypes from "prop-types";
import { useState } from "react";

function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c)=> c+1); Forma 2
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: Proptypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 20,
};

export default CounterApp;

/*
  FirstApp.defaultProps = {
    name: 'Javier Mendoza',
    subTitle: 'No hay  subtitulo',
    title: 'No hay titulo',
  }

  */
