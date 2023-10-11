import { apiService } from "./apiService";

export const listagemUsuarios = () =>{

    const url = "/buscar-todos"

    const listarUsuarios = () =>{
        return apiService.get(`${url}`)
    }
    return {listarUsuarios}
}