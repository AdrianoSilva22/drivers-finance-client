import { Usuario } from "@/models/driver"
import "@/styles/usuarioCard.css"

interface UsuarioCardProps {
    usuario: Usuario
}

export function UsuariooCard({ usuario }: UsuarioCardProps) {
    return (

        <div className="div-card-container">
            <ul>
                <li>Nome: {usuario.nome}</li>
                <li>Email: {usuario.email}</li>
                <li>Login: {usuario.login}</li>
                <li>Senha: {usuario.senha}</li>
                <li>Gênero: {usuario.genero}</li>
            </ul>
        </div>
    )
}