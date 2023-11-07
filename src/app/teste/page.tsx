'use client'

import { UsuariooCard } from "@/components/UsuarioCard"
import { Usuario } from "@/models/usuario"
import { listagemUsuarios } from "@/service/listagemUsuarios"
import { useEffect, useState } from "react"

export default function ListagemUsuarios() {
    const { listarUsuarios } = listagemUsuarios()
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {
        const listar = async () => {
            try {
                const response = await listarUsuarios()
                setUsuarios(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        listar()

    }, [])

    return (
        <div>
            {
                usuarios.map((usuario) => {
                    return (
                        <UsuariooCard
                            key={usuario.id}
                            usuario={usuario}
                        />
                    )
                })
            }
        </div>
    )
}