import { Usuario } from "@/models/usuario";
import { apiService } from "./apiService";

export const cadastroService = () => {

    const url = "/cadastro"

    const cadastrarUsuario = (usuario: Usuario) => {
        return apiService.post(`${url}`, usuario)
    }

    return {
        cadastrarUsuario
    }
}

