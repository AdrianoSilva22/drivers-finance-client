'use client'

import { UsuarioCard } from "@/components/UsuarioCard"
import { Usuario } from "@/models/usuario"
import { listagemUsuarios } from "@/service/listagemUsuarios"
import { useEffect, useState } from "react"


export default function ListagemUsuarios() {

    const { listarUsuarios } = listagemUsuarios()
    const [usuarios, setUsuario] = useState<Usuario[]>([])

    useEffect(() => {
        const listar = async () => {
            try {
                const usuariosResponse = await listarUsuarios()
                setUsuario(usuariosResponse.data)
            } catch (e) {
                console.log(e)
            }
        }
        listar()
    }, [])

    return (
        <div>
            <h1>Usuarios:</h1>
            {
                usuarios.map((usuario) => {
                    return (
                        <UsuarioCard
                            key={usuario.id}
                            id={25}
                            nome={usuario.nome}
                            login={usuario.login}
                            email={usuario.email}
                            senha={usuario.senha}
                            genero={usuario.genero}
                        />
                    )
                })
            }
        </div>
    )
}