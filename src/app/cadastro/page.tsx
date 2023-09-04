'use client'

import { mensagemErro, mensagemSucesso } from "@/models/toast"
import { Usuario, valorInicialUsuario } from "@/models/usuario"
import { cadastroService } from "@/service/cadastroService"
import { useState } from "react"

interface propriedadeErros {
    location: string
    msg: string
    path: string
    type: string
    value: string
}

export default function Cadastro() {

    const [usuario, setUsuario] = useState<Usuario>(valorInicialUsuario)
    const { cadastrarUsuario } = cadastroService()

    const cadastrar = async () => {

        try {
            await cadastrarUsuario(usuario)
            mensagemSucesso('Usuário Cadastrado Com Sucesso!')
        } catch (e: any) {

            if (e.response.data.errors) {
                const arrayErros = e.response.data.errors as propriedadeErros[]
                arrayErros.forEach((erro) => mensagemErro(erro.msg))
            } else {
                mensagemErro(e.response.data)
            }
        }
    }

    return (
        <div>
            <label>Login:</label>
            <input
                type="text"
                name="login"
                onChange={(e) => setUsuario({ ...usuario, login: e.target.value })}
            />

            <label>Nome:</label>
            <input
                type="text"
                name="nome"
                onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
            />

            <label>Email:</label>
            <input
                type="email"
                name="email"
                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            />

            <label>Senha:</label>
            <input
                type="password"
                name="senha"
                onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
            />

            <label>Gênero:</label>
            <select
                name="genero"
                id="genero"
                onChange={(e) => setUsuario({ ...usuario, genero: e.target.value })} >
                <option value="" >Selecione...</option>
                <option value="feminino">Femino</option>
                <option value="masculino">Masculino</option>
                <option value="outro">Outro</option>
            </select>

            <button
                type="button"
                onClick={cadastrar}>Cadastrar</button>
        </div>
    )
}

