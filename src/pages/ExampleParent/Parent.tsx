import { useState } from "react";
import { Child } from "./Child";

export function Parent(){
  const [horaAtual, setHoraAtual] = useState('');

  const mostrarHoraAtual = () => {
    const hora = new Date().toLocaleTimeString();
    setHoraAtual(hora);
  };

  console.info("2-Parent")

  return(
    <div style={{ border: '1px solid black'}}>
      <p>{`Hora atual: ${horaAtual}`}</p>
      <button onClick={mostrarHoraAtual}>Mostrar Hora Atual</button>

      <Child />
    </div>
  )
}