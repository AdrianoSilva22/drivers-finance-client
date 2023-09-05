import { Usuario } from "@/models/usuario"
import { apiService } from "./apiService"

export const loginService = () => {
    const login = (usuario: Usuario) => {
        return apiService.post('/login', usuario)
    }
    return {login}
}