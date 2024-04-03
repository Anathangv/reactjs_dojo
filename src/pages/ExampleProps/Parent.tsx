import { useState } from "react";
import { Child } from "./Child";
import { ChildProps } from "./ChildTime";

export function Parent(){
  const [horaAtual, setHoraAtual] = useState('');

  const mostrarHoraAtual = () => {
    const hora = new Date().toLocaleTimeString();
    setHoraAtual(hora);
  };

  console.info("1-Parent")

  return(
    <div style={{ border: '1px solid black'}}>
      <h3>ExampleProps</h3>
      <button onClick={mostrarHoraAtual}>Mostrar Hora Atual</button>

      <ChildProps horaAtual={horaAtual}/>

      <Child />
    </div>
  )
}