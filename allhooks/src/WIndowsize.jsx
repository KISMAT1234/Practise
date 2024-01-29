
import React, {useState, useEffect} from "react"


 const App = () => {

  const [windows, setwindow]= useState(window.screen.width);
  
  const currentScreenWidth=()=>{
    setwindow(() => window.innerWidth);

  }
  
  useEffect(()=>{
    window.addEventListener('resize',currentScreenWidth)
    return () => {
      window.removeEventListener("resize",currentScreenWidth);
    }
  });
  return (
    <> 
        <wrapper>
           <h1> The size of the window is <span> {windows} </span>  </h1>
        </wrapper>
    </>

  )
}

export default App
