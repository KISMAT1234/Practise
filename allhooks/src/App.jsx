
import React, {useState} from "react"

function App(){
  const[form, setForm] = useState({
    name:"",
    email: "",
    password:"",
    address:"",
  });

const handleInput = (e) => {
  const name = e.target.name;
  const email = e.target.email;
  const password = e.target.password;
  const address= e.target.address;

  setForm((prev)=>{
    return {...prev, [name]:value}
  });

  console.log(name);

}
  
  
  return (
    <> 
    <h1>Registration form</h1>
    <form submit="">
       <input type="text" name="name" onChange={handleInput} value={form.name} placeholder="name"/><br></br>
       
       <input type="email" name="email" onChange={handleInput} value={form.email} placeholder="emial"/><br></br>
       
       <input type="password" name="password" onChange={handleInput} value={form.password} placeholder="password"/><br></br>
       
       <input type="text" name="address" onChange={handleInput} value={form.address} placeholder="address"/><br></br>
       <button >register</button>
    </form>
    <p>{`My name is ${form.name}  and I live at ${form.address}`}</p>
    </>

  )
}

export default App
