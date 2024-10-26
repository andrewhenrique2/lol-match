// src/app/page.tsx

import Image from 'next/image'
import logo from '../../public/logo.jpg'
import { Button } from './ui/button'

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="w-2/4">
          <h1 className="text-5xl font-bold text-white">
            Encontra os melhores companheiros de equipa com
            <span className="text-yellow-500"> Match</span>, o teu assistente
            paras encontrar duos.
          </h1>
          <Button className="mt-4 px-11 py-6 bg-button ">Procurar Duo</Button>
        </div>
        <Image src={logo} alt="Duoo" width={300} height={300} />
      </div>
    </div>
  )
}
