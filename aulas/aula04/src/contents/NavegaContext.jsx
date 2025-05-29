import { createContext, useState } from "react";

const NavegaContext = createContext();

function NavegaProvider(props){
    const {rota, setRota} = useState("");

    return(
        <NavegaContext.Provider value={{rota, setRota}}>
            {props.children}
        </NavegaContext.Provider>
    );
}

export {NavegaContext, NavegaProvider};