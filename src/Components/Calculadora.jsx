import React from 'react'
import { useState } from 'react'; 

const Calculadora = () => {
  
  const [calc, setCalc]= useState("");
  const [setResult] = useState ("");

  const ops=['/','*','+','-','.','%'];

  const updatecalc = value =>{

    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
	      return;
    }
   
    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc+value).toString());
    
    }
  }


    const crearDigitos = () => {
      const digits = [];
      for (let i = 1; i < 10; i++){
      digits.push(
        <button 
          onClick={() => updatecalc(i.toString())} 
          key={i}>
          {i}
        </button>
        )
      }
      return digits;
    }

    const calcular = () => {
      setCalc(eval(calc).toString());
    }

    const borrarall = () => {
      if (calc =='') {
          return;
      } 
      const value = calc.slice(calc.length);
      setCalc(value);
    }

    const borrarone = () => {
      if (calc =='') {
        return;
      }
      const val = calc.slice(0,-1);

      setCalc(val);
    }

    return (
      <div className="App">
          <div className="calculator">
            <div className="display">
              {/* {result ? <span> ({result}) </span> : ''  }&nbsp; */}
              {calc || "0"}
            </div>

            <div className="operadores">

                <button onClick={() => updatecalc ('+')}>+</button>           
                <button onClick={() => updatecalc ('-')}>&ndash;</button>
                <button onClick={() => updatecalc ('*')}>&times;</button>
                <button onClick={() => updatecalc ('/')}>&divide;</button>

                <button onClick={borrarall}>DEL</button>
                <button onClick={borrarone}>&larr;</button>
  
            </div>
 

            <div className="digitos">
                { crearDigitos() }
                <button onClick={() => updatecalc ('0')}>0</button>
                <button onClick={() => updatecalc ('.')}>.</button>
                <button onClick={calcular}>=</button>
		<button onClick={() => updatecalc ('%')}>%</button>

            </div>

          </div>
      </div>
        
    );
    
   
  }
export default Calculadora
