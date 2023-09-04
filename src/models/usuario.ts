export interface Usuario {
  id: number | string
  login: string
  senha: string
  nome: string
  email: string
  genero: string
}

export const valorInicialUsuario: Usuario= {
  id: '',
  login: '',
  senha: '',
  nome: '',
  email: '',
  genero: ''
}