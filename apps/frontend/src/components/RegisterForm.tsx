'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../../public/logo.png'
import { Button } from './ui/button'
import { HomeIcon } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from './ui/card'
import { FaGoogle, FaDiscord } from 'react-icons/fa'
import { Eye, EyeOff } from 'lucide-react'

interface AuthFormProps {
  type: 'login' | 'register' // Define o tipo de formulário
}

export function AuthForm({ type }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const isLogin = type === 'login' // Verifica se é login ou registro

  return (
    <div className="bg-card h-screen w-full">
      {/* Cabeçalho com logo e botão Home */}
      <div className="flex bg-background w-screen justify-between items-center px-80 py-6">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            quality={100}
            width={130}
            height={130}
            className="cursor-pointer"
          />
        </Link>
        <Link href="/">
          <Button className="bg-lime-600 hover:bg-lime-500 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <HomeIcon size={24} />
          </Button>
        </Link>
      </div>

      {/* Card de Login/Registro */}
      <Card className="max-w-xl mx-auto bg-[#1F2937] text-white p-10 rounded-lg shadow-lg mt-20 border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold mb-2 text-lime-400">
            {isLogin ? 'Fazer login' : 'Criar conta'}
          </CardTitle>
          <CardDescription className="text-gray-300 mb-6">
            {isLogin
              ? 'Boas-vindas à comunidade Match, onde todo jogo é um bom jogo.'
              : 'Crie sua conta e junte-se à comunidade Match.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            {/* Nome apenas para Registro */}
            {!isLogin && (
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-3 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400"
              />
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Endereço de e-mail"
              className="w-full p-3 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400"
            />

            {/* Senha */}
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                className="w-full p-3 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button className="bg-lime-500 hover:bg-lime-400 text-white py-3 rounded-md">
              {isLogin ? 'Continuar com e-mail' : 'Registrar'}
            </Button>
          </form>

          {/* Separador */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-500" />
            <span className="mx-2 text-gray-400">OU</span>
            <hr className="flex-grow border-gray-500" />
          </div>

          {/* Botões de Login Social */}
          <div className="flex justify-center gap-4">
            <Button className="bg-white border rounded-full p-4">
              <FaGoogle size={24} className="text-red-500" />
            </Button>
            <Button className="bg-indigo-600 text-white rounded-full p-4">
              <FaDiscord size={24} />
            </Button>
          </div>

          {/* Link para Login/Registro */}
          <p className="text-center text-lg mt-6">
            {isLogin ? 'Ainda não é membro?' : 'Já tem uma conta?'}{' '}
            <Link
              href={isLogin ? '/register' : '/login'}
              className="text-lime-400"
            >
              {isLogin ? 'Registre-se agora' : 'Fazer login'}
            </Link>
          </p>

          {/* Termos e Política */}
          <p className="text-center text-xs mt-4 text-gray-400">
            <Link href="/terms" className="text-gray-400">
              Termos de Uso
            </Link>{' '}
            &nbsp;|&nbsp;{' '}
            <Link href="/privacy" className="text-gray-400">
              Política de Privacidade
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
