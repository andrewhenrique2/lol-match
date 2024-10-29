'use client' // Torna o componente um Client Component

import Link from 'next/link'
import { Send } from 'lucide-react'
import { Input } from './ui/input'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black from-gray-900 to-gray-800 text-white py-10">
      <div className="container mx-auto px-8 lg:px-28">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-12">
          {/* Logo e descrição */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-4xl font-bold text-lime-500">Match</h2>
            <p className="text-gray-400 mt-2">
              A ferramenta ideal para você encontrar o parceiro perfeito e
              dominar o jogo.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-16">
            <div>
              <h3 className="text-lg font-semibold">Match</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Página inicial</Link>
                </li>
                <li>
                  <Link href="#">Procurar Clash</Link>
                </li>
                <li>
                  <Link href="#">Procurar Duos</Link>
                </li>
                <li>
                  <Link href="#">Inscrever-me</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">General</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Sobre Match</Link>
                </li>
                <li>
                  <Link href="#">Blog dos fundadores</Link>
                </li>
                <li>
                  <Link href="#">Política de Privacidade</Link>
                </li>
                <li>
                  <Link href="#">Termos e condições</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter e Redes Sociais */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start px-4 lg:px-0">
            <h3 className="text-lg font-semibold mb-2">Receba as Novidades</h3>
            <p className="text-sm text-gray-400 mb-4 text-center lg:text-left">
              Inscreva-se para receber atualizações sobre novos recursos e
              torneios exclusivos.
            </p>
            <div className="flex items-center w-full max-w-md space-x-2">
              <Input
                placeholder="Digite seu email"
                className="flex-1 bg-gray-700 text-white placeholder-gray-400"
                type="email"
              />
              <button
                className="p-2 bg-lime-500 rounded-md hover:bg-lime-600 transition-colors"
                onClick={() => alert('Email cadastrado com sucesso!')}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61560597991454"
                target="_blank"
              >
                <FaFacebook className="w-6 h-6 text-white hover:text-lime-500 transition-colors" />
              </Link>
              <Link href="https://x.com/AndrewC21967245" target="_blank">
                <FaTwitter className="w-6 h-6 text-white hover:text-lime-500 transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/andrewchucrute/"
                target="_blank"
              >
                <FaInstagram className="w-6 h-6 text-white hover:text-lime-500 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          Copyright © 2024 Match.gg
        </div>
      </div>
    </footer>
  )
}
