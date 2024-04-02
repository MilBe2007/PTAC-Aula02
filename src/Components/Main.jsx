import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTel] = useState("");
    const [Conta, setEmail] = useState("");
    const [listaContatos, setContatos] = useState( [ ] );

    const registrar = (event) => {
        event.preventDefault();
        alert("Deu certo!");
        sertContatos([...listaContatos,
        {
            nomeSalvo: nome,
            telefone: telefone,
            email: Conta 
        }
    ])
    }
    console.table(listaContatos);

    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="Nome">
                    Nome:  
                </label>
            <input 
            type="text" 
            name="" 
            id="Nome" 
            onChange={(event)=> setNome(event.target.value)}/>

                <label htmlFor="telefone">
                    Telefone:  
                </label>  
                <input
                type="tel"
                tel=""
                id="telefone"
                onChange={(event)=> setTel(event.target.value)}/>
               
               <label htmlFor="email">
                    Email:  
                </label>
            <input 
            type="text" 
            name="" 
            id="Conta" 
            onChange={(event)=> setEmail(event.target.value)}/>


                <button>
                    Salvar
                </button>
            </form>

            {nome}
            {telefone}
            {Conta}
        </main>
    );
}