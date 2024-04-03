import { Parent } from "./Parent"

export function Container(){

  console.info("1-Container")

  return(
    <div style={{ border: '1px solid black'}}>
      <h3>ExampleParent</h3>
      <Parent />
    </div>
  )
}
