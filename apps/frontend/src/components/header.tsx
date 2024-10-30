'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import logo from '../../public/logo.png'
import { Menu } from 'lucide-react' // Ícones do Lucide
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from './ui/dropdown-menu' // shadcn DropdownMenu

export default function Header() {
  return (
    <header className="bg-background text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-28">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          <Image
            src={logo}
            alt="Logo"
            width={130}
            height={130}
            className="cursor-pointer"
          />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex space-x-6">
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

        {/* Botão de Login Desktop */}
        <Link href="/login" className="hidden lg:block">
          <Button className="bg-lime-600 hover:bg-lime-500 text-lg py-2 px-4 rounded-lg shadow-lg">
            Iniciar Sessão
          </Button>
        </Link>

        {/* Dropdown Menu Mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              <Menu size={30} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background text-white">
            <DropdownMenuLabel>Navegação</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/chat-geral">Chat</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/encontrar-duo">Duo</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/clash">Clash</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/login">
                <Button className="bg-lime-600 hover:bg-lime-500 text-lg py-2 px-4 rounded-lg">
                  Iniciar Sessão
                </Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
