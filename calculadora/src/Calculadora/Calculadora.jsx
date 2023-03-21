import React, { useState } from 'react';
import './Calculadora.css';

function App() {
  const [resultado, setResultado] = useState("");

  function handleClick(e) {
    setResultado(resultado.concat(e.target.name));
  }

  function calcular() {
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado("Error");
    }
  }

  function borrar() {
    setResultado("");
  }

  return (
    <div className="App">
      <div className="calculadora">
        <input type="text" className='input' value={resultado} />
        <div className="fila">
          <button className="operador" onClick={borrar}>C</button>
          <button className="operador" name="/" onClick={handleClick}>/</button>
          <button className="operador" name="*" onClick={handleClick}>*</button>
          <button className="operador" name="-" onClick={handleClick}>-</button>
        </div>
        <div className="fila">
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="operador" name="+" onClick={handleClick}>+</button>
        </div>
        <div className="fila">
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="operador" name="." onClick={handleClick}>.</button>
        </div>
        <div className="fila">
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="operador" onClick={calcular}>=</button>
        </div>
        <div className="fila">
          <button name="0" onClick={handleClick}>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
