// components/Header.tsx
import Link from 'next/link'
import logo from '../../public/logo.jpg'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="bg-background text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-3xl font-bold">
          <Image src={logo} alt="" width={30} height={30} />
        </div>
        <nav className="flex space-x-6">
          <Link href="/chat-geral" className="">
            Chat
          </Link>
          <Link href="/encontrar-duo" className="">
            Duo
          </Link>

          <Link href="/clash" className="">
            Clash
          </Link>
        </nav>
        <Link href="/criar-perfil">
          <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer">
            Cria o teu perfil
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
