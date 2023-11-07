'use client'

import imgArrow from '@/images/iconRightwardArrow.png'
import { mensagemErro, mensagemSucesso } from "@/models/toastr"
import { Usuario, valorInicialUsuario } from "@/models/usuario"
import { cadastroService } from "@/service/cadastroService"
import '@/styles/cadastro.css'
import Image from "next/image"
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
    <div className="main-div">
      <header className="link-login-create">
        <a href="http://">LOGIN</a>
        <a href="http://">CADASTRE-SE</a>
      </header>
      <div className="secondary-div">
        <div className="left-div">
          <h1 id='titulo'>Crie sua conta</h1>
          <input
            placeholder="Seu Login"
            type="text"
            name="login"
            onChange={(e) => setUsuario({ ...usuario, login: e.target.value })}
          />
          <input
            placeholder="Seu nome"
            type="text"
            name="nome"
            onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
          />
          <input
            placeholder="Seu E-mail"
            type="email"
            name="email"
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
          <input
            placeholder="Senha"
            type="password"
            name="senha"
            onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
          />
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
            onClick={cadastrar}>CADASTRAR
          </button>
        </div>

        <div className="right-div">
           <h3>  <span id='right_title'>LISTAGEM DE USUÁRIOS</span></h3> {/*<Image alt='' src={imgGlob } id='img-glob'/>*/}
          <h1 id='description-project-title'>Projeto pessoal com fito em adquirir mais conhecimento</h1> 
          <span id='textMotivation'>Um simples projeto, mas que significa muito para evoluir</span>
          <a href="" id="page-login"> <Image alt="image arrow" src={imgArrow} /> Voltar para login</a>
        </div>
      </div>



      {/*<div className="Principal">

        <div className="secundaria">
          <div className="detalhes">
            <h1>Crie sua conta</h1>
            <div className="linha-horizontal"></div>
          </div>
          <div className="terciaria">
            <label>Login:</label>
            <input
              placeholder="Login"
              type="text"
              name="login"
              onChange={(e) => setUsuario({ ...usuario, login: e.target.value })}
            />

            <label>Nome:</label>
            <input
              placeholder="Nome"
              type="text"
              name="nome"
              onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
            />

            <label>Email:</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            />

            <label>Senha:</label>
            <input
              placeholder="Senha"
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
            <div className="div-Buttao">
              <button
                type="button"
                onClick={cadastrar}>Cadastrar
              </button>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  )
}

