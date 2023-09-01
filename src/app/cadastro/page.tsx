import { ChangeEvent, useState } from "react";

const [usuario, setUsuario] = useState();

export default function cadastro() {
    const  usuarioEvent = (e: ChangeEvent<HTMLInputElement>)=>{ 
        setUsuario.e.target.value
    }

    return (
        <div>
            <label>Login:</label>
            <input type="text" name="login" />

            <label>Nome:</label>
            <input type="text" name="nome" />

            <label>Email:</label>
            <input type="email" name="email" />

            <label>Senha:</label>
            <input type="password" name="senha" />

            <label>Gênero:</label>
            <select name="genero" id="genero">
                
            </select>

            <button type="button">Cadastrar</button>
        </div>
    )
}

