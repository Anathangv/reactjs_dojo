import { useState } from "react";

export function ExampleState(){

  let valor = 0;

  function incrementar(){
    valor ++;
    console.info("incrementar", valor);
  }

  return(
    <div>
      <h3>ExampleState</h3>
      <p>{`Contador: ${valor}`}</p>
      <button onClick={incrementar}>+</button>
    </div>
  )
}

/*
const [valor, setValor] = useState(0);
setValor( prev => prev + 1)
*/