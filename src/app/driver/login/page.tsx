'use client'

import { Driver, valorInicialDriver } from "@/models/driver"
import { LoginService } from "@/service/serviceFunctions/driver/loginService"
import '@/styles/login.css'
import { useState } from "react"

export default function Login() {
    const [driver, setDriver] = useState<Driver>(valorInicialDriver)

    const { loginDriver } = LoginService()
    async function logar() { return await loginDriver(driver) }

    return (

        <div className="main-div">
            <header className="link-login-create">
                <a href="http://localhost:3000/driver/login">SAIBA MAIS</a>
                <a href="http://localhost:3000/driver/register">CADASTRE-SE</a>
            </header>
            <div className="secondary-div">
                <div className="left-div">
                    <h1 id='titulo'>Faça Login</h1>

                    <input
                        id='InputRegister'
                        placeholder="Seu E-mail"
                        type="email"
                        name="email"
                        value={driver.email}
                        onChange={(e) => setDriver({ ...driver, email: e.target.value })}
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        name="senha"
                        value={driver.senha}
                        onChange={(e) => setDriver({ ...driver, senha: e.target.value })}
                    />


                    <button
                        type="button"
                        onClick={logar}
                    >LOGIN
                    </button>
                </div>

                <div className="right-div">
                    <h3>  <span id='right_title'>Drivers Finance</span></h3> {/*<Image alt='' src={imgGlob } id='img-glob'/>*/}
                    <h1 id='description-project-title'>Administre Suas finanças de forma fácil, eficaz e organizada</h1>
                    <span id='textMotivation'>Estabilidade financeira e Drivers Finance andam juntos</span>
                </div>
            </div>
        </div>
    )
}