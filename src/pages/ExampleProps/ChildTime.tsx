interface IChildProps{
  horaAtual: string
}

export function ChildProps({horaAtual}: IChildProps){

  console.info("2.1-ChildTime")

  return(
    <div style={{ border: '1px solid black'}}>
      <p>{`Hora atual child: ${horaAtual}`}</p>
    </div>
  )
}