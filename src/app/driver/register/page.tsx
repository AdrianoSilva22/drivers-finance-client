'use client'

import { PropertyExpressValidator } from '@/models/PropertyExpressValidator'
import { Driver, valorInicialDriver } from '@/models/driver'
import { mensagemErro, mensagemSucesso } from '@/models/toastr'
import { driverService } from '@/service/driverService'
import '@/styles/cadastro.css'
import { useState } from "react"

export default function Cadastro() {

  const [driver, setDriver] = useState<Driver>(valorInicialDriver)
  const { registerDriver } = driverService()

  const cadastrar = async () => {

    try {
      await registerDriver(driver)
      setDriver(valorInicialDriver)
      mensagemSucesso('Motorista Cadastrado Com Sucesso!')
    } catch (e: any) {

      if (e.response.data.errors) {
        const arrayErros = e.response.data.errors as PropertyExpressValidator[]
        arrayErros.forEach((erro) => mensagemErro(erro.msg))
      } else {
        mensagemErro(e.response.data)
      }
    }
  }

  return (
    <div className="main-div">
      <header className="link-login-create">
        <a href="http://localhost:3000/driver/login">LOGIN</a>
        <a href="http://localhost:3000/driver/register">CADASTRE-SE</a>
      </header>
      <div className="secondary-div">
        <div className="left-div">
          <h1 id='titulo'>Crie sua conta</h1>

          <input
            id='InputRegister'
            placeholder="Seu nome"
            type="text"
            name="nome"
            value={driver.name}
            onChange={(e) => setDriver({ ...driver, name: e.target.value })}
          />
          <input
            id='InputRegister'
            placeholder="Seu E-mail"
            type="email"
            name="email"
            value={driver.email}
            onChange={(e) => setDriver({ ...driver, email: e.target.value })}
          />
          <input
            id='InputRegister'
            placeholder="Senha"
            type="password"
            name="senha"
            value={driver.senha}
            onChange={(e) => setDriver({ ...driver, senha: e.target.value })}
          />
          <input
            id='InputRegister'
            placeholder="Telefone"
            type="text"
            name="telefone"
            value={driver.phone_number}
            onChange={(e) => setDriver({ ...driver, phone_number: e.target.value })}
          />
          <input
            id='InputRegister'
            placeholder="CPF"
            type="text"
            name="CPF"
            value={driver.cpf}
            onChange={(e) => setDriver({ ...driver, cpf: e.target.value })}
          />
          <select
            name="genero"
            id="genero"
            value={driver.genero}
            onChange={(e) => setDriver({ ...driver, genero: e.target.value })} >
            <option value="" >Selecione...</option>
            <option value="feminino">Femino</option>
            <option value="masculino">Masculino</option>
            <option value="outro">Outro</option>
          </select>
          <button
            type="button"
            onClick={cadastrar}
          >CADASTRAR
          </button>
        </div>

        <div className="right-div">
          <h3>  <span id='right_title'>Drivers Finance</span></h3> {/*<Image alt='' src={imgGlob } id='img-glob'/>*/}
          <h1 id='description-project-title'>Administre Suas finanças de forma fácil, eficaz e organizada</h1>
          <span id='textMotivation'>Estabilidade financeira e Drivers Finance andam juntos</span>
          <a href="" id="page-login"> Voltar para login</a>
        </div>
      </div>
    </div>
  )
}

