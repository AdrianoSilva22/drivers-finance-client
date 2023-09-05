'use client'
import { Usuario, valorInicialUsuario } from "@/models/usuario"
import { loginService } from "@/service/loginService"
import { useState } from "react"
const { login } = loginService()
export default function Login() {

    const [usuario, setUsuario] = useState<Usuario>(valorInicialUsuario)

    const logar = async () => {
        try {
            const response = await login(usuario)
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <label>Login</label>
            <input type="text" name="Login" id="Login" onChange={(e) => setUsuario({ ...usuario, login: e.target.value })} />
            <label>Senha</label>
            <input type="password" name="senha" id="senha" onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })} />
            <button type="button" onClick={logar}>Login</button>

        </div>
    )
}