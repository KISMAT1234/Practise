import React from "react";
import { useContext} from "react";
import {AppContext} from "./UseContext";


const Child = () =>{
  
    const userData= useContext(AppContext)
    console.log(userData);

    return(
        <div>
            Child = My name is {userData.name} and my age is {userData.age}
        </div>
    )
    
}

export default Child;