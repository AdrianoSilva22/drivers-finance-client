'use client'
import '@/styles/cadastro.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function TesteLogout() {
  const router = useRouter()
  const handleLogout = () => {
    Cookies.remove('driverToken')
    router.push('/driver/login')
  }

  return (
    <div>
      <h1>deslogue: </h1>
      <button onClick={handleLogout}>Deslogar</button>
    </div>
  )
}