import React, {useState, useEffect, useDispatch} from "react";
import './App.css'

function App() {
  const  [loading, setLoading]= useState(true)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Blog</h1>
    </>
  )
}

export default App
