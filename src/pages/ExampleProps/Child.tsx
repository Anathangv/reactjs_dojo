import { memo } from "react";

export function Child(){
  console.info("2.2-Child");

  return (
    <div style={{ border: '1px solid black'}}>
      <p><b>{`Sou um component child`}</b></p>
    </div>
  );
}

/*
export const Child = memo(() => {
);
*/