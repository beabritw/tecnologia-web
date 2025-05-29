import './InputEmail.css'

function InputEmail(props){
    return(
        <>
            <label htmlFor="email" >E-mail</label>
            <input 
                type="email" 
                value={props.valor} 
                placeholder="Digite um Email" 
                onChange={(e)=>{props.trataValor(e.target.value);
            }}/>
        </>
    )
}

export default InputEmail;