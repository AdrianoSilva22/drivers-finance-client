'use client'
import { mensagemErro, mensagemSucesso } from "@/models/toastr"
import { Usuario, valorInicialUsuario } from "@/models/usuario"
import { loginService } from "@/service/loginService"
import '@/styles/login.css'
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

        <div className="central">
            <details>
                <summary>Listagem Usuários</summary>
                <ul>
                    <a href="http://localhost:3000/cadastro">Cadastrar</a>
                    <a href="">Listar Usuários</a>
                </ul>
            </details>
            <div className="Principal">

                <div className="secundaria">
                    <div className="detalhes">
                        <h1>Login</h1>
                        <div className="linha-horizontal"></div>
                    </div>
                    <div className="terciaria">
                        <label>Login</label>
                        <input type="text" name="Login" id="Login" onChange={(e) => setUsuario({ ...usuario, login: e.target.value })} />

                        <label>Senha</label>
                        <input type="password" name="senha" id="senha" onChange={(e) => { setUsuario({ ...usuario, senha: e.target.value }) }} />


                        <div className="div-Buttao">
                            <button type="button" onClick={logar}>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}