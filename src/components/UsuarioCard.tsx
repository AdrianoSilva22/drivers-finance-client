import { Usuario } from "@/models/usuario";
import '@/styles/usuarioCard.css';

export function UsuarioCard(props: Usuario) {

    return (
        <div className="div-card-container">
            <ul>
                <li>Login: {props.login}</li>
                <li>Nome: {props.nome}</li>
                <li>Email: {props.email}</li>
                <li>Senha: {props.senha}</li>
                <li>Gênero: {props.genero}</li>
            </ul>
        </div>
    )
}