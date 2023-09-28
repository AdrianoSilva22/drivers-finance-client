import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'toastr/build/toastr.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de Usuários',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <footer className="foooter">
          <div className='p'>
          <div className="PRINCIPAL">
            <div className="division1">
              Bem-vindo à nossa página de lista de usuários! Aqui você encontrará informações sobre os membros da nossa comunidade. Nossos usuários desempenham um papel fundamental em nossa plataforma, contribuindo com suas habilidades, conhecimento e experiência. </div>

            <div className="sub1">
              <div className="divisao2cima">
                <div className="itensDivisao2cima">
                  <a href="">Institucional</a>
                  <a href="">Serviços</a>
                  <a href="">Ajuda</a>
                  <a href="" id="atendimento">Atendimento</a>
                </div>
              </div>

              <div className="divisao2baixo">
                <div className="itensDivisao2baixo">
                  <a href="" id="quemSomos">Quem somos</a>
                  <a href="" id="andamento">Andamento do Serviço</a>
                  <a href="" id="politica">política de privacidade</a>
                  <a href="" id="numero">0800 256-0000</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
