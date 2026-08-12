import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

//hooks

function App() {

  let [counter, setcounter] = useState(10);

  const addValue = () => {
    setcounter(counter+1)
  }

  const removeValue = () => {
    setcounter(counter-1)
  }


  return (
    <>
     <h1>Hooks in react</h1>
     <h2>counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>

      <button
     onClick={removeValue}
     >remove value {counter}</button>

     <p>footer: {counter}</p>

    </>
  );
}

export default App;
