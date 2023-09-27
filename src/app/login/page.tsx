'use client'
import { mensagemErro, mensagemSucesso } from "@/models/toastr"
import { Usuario, valorInicialUsuario } from "@/models/usuario"
import { loginService } from "@/service/loginService"
import { useState } from "react"
const { login } = loginService()
export default function Login() {

    const [usuario, setUsuario] = useState<Usuario>(valorInicialUsuario)
    console.log(usuario)

    const logar = async () => {
        try {
            const response = await login(usuario)
            mensagemSucesso(response.data)
        } catch (e: any) {
            mensagemErro(e.response.data)
        }
    }
    return (
        <div>
            <label>Login</label>
            <input type="text" name="Login" id="Login" onChange={(e) => setUsuario({...usuario, login: e.target.value })} />
            <label>Senha</label>
            <input type="password" name="senha" id="senha" onChange={(e)=>{setUsuario({...usuario,senha:e.target.value})}}/>
            <button type="button" onClick={logar}>Login</button>

        </div>
    )
}