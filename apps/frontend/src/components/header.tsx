import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="bg-background text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-28">
        <div className="text-3xl font-bold">
          <Image src={logo} alt="Logo" quality={100} width={130} height={130} />
        </div>
        <nav className="flex space-x-6">
          <Link
            href="/chat-geral"
            className="text-2xl font-bold hover:text-lime-500 transition-colors duration-300"
          >
            Chat
          </Link>
          <Link
            href="/encontrar-duo"
            className="text-2xl font-bold hover:text-lime-500 transition-colors duration-300"
          >
            Duo
          </Link>
          <Link
            href="/clash"
            className="text-2xl font-bold hover:text-lime-500 transition-colors duration-300"
          >
            Clash
          </Link>
        </nav>

        <Link href="/criar-perfil">
          <Button
            className="
              mb-4 
              bg-lime-600 
              hover:bg-lime-500 
              text-white 
              text-lg 
              py-6 
              px-6 
              mt-2
              rounded-lg 
              shadow-lg 
              hover:shadow-xl 
              transition-all 
              duration-300 
              ease-in-out 
              transform 
              hover:scale-105
            "
          >
           Iniciar Sessão
          </Button>
        </Link>
      </div>
    </header>
  )
}
