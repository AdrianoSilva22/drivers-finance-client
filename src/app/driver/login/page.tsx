'use client'
import { PropertyExpressValidator } from "@/models/PropertyExpressValidator"
import { Driver, valorInicialDriver } from "@/models/driver"
import { mensagemErro, mensagemSucesso } from "@/models/toastr"
import { driverService } from "@/service/driverService"
// import { useRouter } from 'next/router'

import '@/styles/login.css'
import { useState } from "react"

const { logInDriver } = driverService()
export default function Login() {

    const [driver, setDriver] = useState<Driver>(valorInicialDriver)
    // const router = useRouter();


    const logar = async () => {
        try {
            const response = await logInDriver(driver)
            if (response) {
                mensagemSucesso(response.data.message)
                // return router.push('/');

            }
        } catch (e: any) {
            if (e.response.data.errors) {
                console.log(e.response)
                const arrayErrors = e.response.data.errors as PropertyExpressValidator[]
                arrayErrors.forEach((erro) => mensagemErro(erro.msg))
            } else {
                mensagemErro(e.response.data)
            }
        }
    }
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