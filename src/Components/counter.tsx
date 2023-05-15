import { Button } from '@mui/material';
import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
function ButtonIncrement(props: { onClickFunc: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  
   return (
     <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     -
     </button>
   )
}
function ButtonDecrement(props: { onClickFunc: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  
  return (
    
    <button  style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc} >
   +
  </button>
   
  
  )
}
function Display(props: { message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
  )
}
function App() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <div> 
      <ButtonIncrement onClickFunc={decrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={incrementCounter}/>
    </div>
  );
}
export default App;