import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
 const [length, setLength]=useState(8)
 const[numberAllowed, setNumberAllowed]=useState(false)
 const [charAllowed, setCharAllowed] = useState();
 const [password, setPassword] = useState("");

const passwordRef = useRef(null)

 const passwordGenerator =  useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789" 
    if(charAllowed) str +="!@#$%^&*-_+=[]{}~`" 

    for (let i=0; i<=length; i++){
      let char=Math.floor(Math.random()*str.length+1)
      console.log(char);
      pass += str.charAt(char);
    }

    setPassword(pass); 

 },[length, numberAllowed, charAllowed, setPassword])

 const  copyPasswordToClipboard=useCallback(()=>{
     passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
 },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed,charAllowed, passwordGenerator])
  
 return (
    <div>
      <div>
        <h1 className='text-red-200'>Password Generator</h1>
        <input type="text" value={password} readOnly w-full/>
        <button onClick={copyPasswordToClipboard}>Copy</button>

      </div>
      <div>
        <div> 
          <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor="numberInput">Numbers</label>

          <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App;
