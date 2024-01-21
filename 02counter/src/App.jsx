// import { useState } from 'react'
import './App.css'
import Card from './components/card';

// function App() {

//   let [counter, setCounter]=useState(15);

   

// const addValue = () =>{
//   if(counter<20){
//   counter=counter + 1;
//   setCounter(counter);
//   }
// }
//  const removevalue = () =>{
//   if(counter>0){
//     counter=counter-1;
//     setCounter(counter);
//   }
//  }

//   return (
//     <>
//      <h1>Kismat bohora</h1>
//      <h2>Counter value: {counter}</h2>

//      <button onClick={addValue}>Add Value {counter}</button><br></br><br></br>
//      <button onClick={removevalue}>Remove Value {counter}</button>
//     </>
//   )
// }

function App(){
  return <>
  <Card football="ronaldo"/>
  <Card cricket="dhoni"/>

  </>
} 










export default App;
