import { useState } from "react";
import InputEmail from "../components/InputEmail"

function Login(){
    const[email, setEmail] = useState("");
    
    const efetuaLogin = (e) => {
        e.preventDefault();
        alert(email);
    }

    
    return(
        <form>
            <InputEmail valor={email} trataValor={setEmail} />
            <button type="submit" onClick={efetuaLogin}>Entrar</button>
        </form>
    );
}

export default Login;