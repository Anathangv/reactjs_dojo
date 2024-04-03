import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ExampleState } from "./pages/ExampleState";
import { Container } from "./pages/ExampleParent/Container";
import { Parent } from "./pages/ExampleProps/Parent";

export function Router(){
  return(
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/ExampleState"  element={<ExampleState />}/>
      <Route path="/ExampleParent"  element={<Container />}/>
      <Route path="/ExampleProps"  element={<Parent />}/>
    </Routes>
  )
}