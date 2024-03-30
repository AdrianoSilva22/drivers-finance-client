import { PropertyExpressValidator } from "@/models/PropertyExpressValidator";
import { Driver } from "@/models/driver";
import { mensagemErro, mensagemSucesso } from "@/models/toastr";
import Cookies from 'js-cookie';
// import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { driverService } from "../../api/driverService";


export const LoginService = () => {
    const router = useRouter();

    const { logInDriver } = driverService()

    const loginDriver = async (driver: Driver) => {
        let token: string

        try {
            const response = await logInDriver(driver)
            if (response) {
                token = response.data.token
                Cookies.set('driverToken', token)
                router.push('/dashboard')
                mensagemSucesso(response.data.message)

                return token
            }
        } catch (e: any) {
            if (e.response.data.errors) {
                const arrayErrors = e.response.data.errors as PropertyExpressValidator[]
                arrayErrors.forEach((erro) => mensagemErro(erro.msg))
            } else {
                mensagemErro(e.response.data.message)
            }
        }
    }

    // const verifyExpiresToken = async () => {
    //     const token = await Cookies.get('token') as string
    //     const decodedToken = await jwtDecode(token);
    //     const currentTimestamp = Math.floor(Date.now() / 1000)
    //     if (decodedToken && decodedToken.exp) {
    //         if (decodedToken.exp < currentTimestamp) {
    //             return new Response("Auth required", {
    //                 status: 401,
    //                 headers: {
    //                     "www-Authenticate": 'Basic realn="Secure Ares"'
    //                 }
    //             })
    //         }
    //     }
    // }
    return {
        loginDriver,
        // verifyExpiresToken
    }
}