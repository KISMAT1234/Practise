import { createContext}  from "react";

const AppContext = createContext();

const AppProvider = ({ children }) =>{
    const userData={
        name:"John Doe",
        age:30,
    };
    return  <AppContext.Provider value={{userData}}> {children} </AppContext.Provider>;
    };

export {AppContext,  AppProvider};