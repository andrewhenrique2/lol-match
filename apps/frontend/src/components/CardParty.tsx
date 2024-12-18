import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card'
import { Check } from 'lucide-react'
import profile from '../../public/team.png'

export default function CardParty() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8 lg:px-14 mb-12">
      <Card
        className="
          flex 
          flex-col 
          w-full 
          max-w-2xl 
          sm:max-w-3xl 
          md:max-w-4xl 
          lg:max-w-7xl 
          bg-card 
          text-white 
          p-6 
          rounded-lg 
          shadow-lg 
          border-none 
          py-8 
          lg:py-12 
          mt-12 
          lg:mt-24 
          lg:flex-row 
          lg:items-start"
      >
        {/* Conteúdo do Card */}
        <div className="lg:w-1/2">
          <CardHeader>
            <p className="text-3xl sm:text-4xl font-semibold text-lime-500 py-4">
              Encontre seu próximo time!
            </p>
            <CardTitle className="text-2xl sm:text-3xl font-bold mt-2 pb-4 text-gray-200">
              Jogue todos os seus modos favoritos com as melhores pessoas!
            </CardTitle>
            <CardDescription className="max-w-xl text-base sm:text-lg text-gray-400 mt-2">
              Do normal e ARAM ao Flex, Clash e muito mais... explore e descubra
              seu time perfeito ou configure seu perfil para que eles encontrem
              você!
            </CardDescription>
            <CardContent className="pt-0 p-0 max-w-xl text-gray-400">
              <ul className="mt-4 space-y-6">
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-8 h-8 sm:w-12 sm:h-12 lg:w-[30px] lg:h-[30px]" />
                  Encontre o parceiro perfeito e conquistem vitórias juntos!
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-8 h-8 sm:w-12 sm:h-12 lg:w-[30px] lg:h-[30px]" />
                  Forme seu time ideal, sincronize estratégias e domine o Clash!
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-8 h-8 sm:w-12 sm:h-12 lg:w-[30px] lg:h-[30px]" />
                  Conecte-se e faça novas amizades pelo chat global.
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-8 h-8 sm:w-12 sm:h-12 lg:w-[30px] lg:h-[30px]" />
                  Socialize com outros duos na plataforma.
                </li>
              </ul>
            </CardContent>
          </CardHeader>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0">
          <Image
            src={profile}
            alt="Match"
            className="w-full rounded-lg"
            quality={100}
            placeholder="blur"
          />
        </div>
      </Card>
    </div>
  )
}
