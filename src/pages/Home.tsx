import { useNavigate } from "react-router-dom";

export function Home(){

  const navigate = useNavigate();

  function handleNavigate(page: string){
    navigate(page);
  }

  return(
    <>
      <ul style={{ cursor: 'pointer' }}>
        <li onClick={() => handleNavigate('/ExampleState')}>ExampleState</li>
        <li onClick={() => handleNavigate('/ExampleParent')}>ExampleParent</li>
        <li onClick={() => handleNavigate('/ExampleProps')}>ExampleProps</li>
      </ul> 
    </>
  )
}