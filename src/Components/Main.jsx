import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTel] = useState("");

    return(
        <main>
            <form>
                <label htmlForm="Nome">
                    Nome de Contato
                </label>
            <input 
            type="text" 
            name="" 
            id="Nome" 
            onChange={(event)=> setNome(event.target.value)}/>
                <label htmlForm="telefone">
                    Número do Contato
                </label>  
                <input
                type="tel"
                tel=""
                id="telefone"
                onChange={(event)=> setTel(event.target.value)}/>
            </form>
            

            {nome}
        </main>
    );
}