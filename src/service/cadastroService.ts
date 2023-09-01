import { User } from "@/models/usuario";
import { apiService } from "./apiService";

export const cadastroService = () => {

    const url = "/cadastro"

    const cadastrarUsuario = (usuario: User) => {
        apiService.post(`${url}`, usuario)
    }

    return {cadastrarUsuario}
}

