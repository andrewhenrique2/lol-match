import Image from 'next/image'
import logo from '../../public/personagens.png'
import { Button } from './ui/button'

export default function Home() {
  return (
    <div className=" bg-black flex flex-col items-center justify-start py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-screen-xl">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white mb-4">
            Encontra os melhores companheiros de equipa com
            <span className="text-lime-400"> Match</span>, o teu assistente para
            encontrar duos.
          </h1>
          <Button
            className="
          bg-lime-600 
          hover:bg-lime-500 
          text-white 
          text-lg 
          py-6 
          px-6
          mt-4
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
            Procurar Duo
          </Button>
        </div>
        <div>
          <Image src={logo} alt="Duoo" priority className="w-auto h-auto" />
        </div>
      </div>
    </div>
  )
}
