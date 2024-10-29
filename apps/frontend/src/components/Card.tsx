import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card'
import { Check } from 'lucide-react'
import profile from '../../public/profiles.png'

export default function FeatureCard() {
  return (
    <div className="flex justify-center items-center px-14 mb-24">
      <Card className="flex flex-col max-w-7xl bg-card text-white p-6 rounded-lg shadow-lg border-none py-12 mt-24 lg:flex-row lg:items-start">
        {/* Conteúdo do Card */}
        <div className="lg:w-1/2">
          <CardHeader>
            <p className="text-4xl font-semibold text-lime-500 py-4">
              Só no Match
            </p>
            <CardTitle className="text-3xl font-bold mt-2 pb-4 text-gray-200">
              Encontre seu par ideal e embarquem juntos rumo à vitória!
            </CardTitle>
            <CardDescription className="max-w-xl text-lg text-gray-400 mt-2">
              Encare seu perfil como o reflexo das suas conquistas e habilidades
              no jogo, mostrando quem você é como jogador.
            </CardDescription>
            <CardDescription className="max-w-xl text-lg text-gray-400 mt-2">
              Nosso objetivo é simplificar sua jornada, oferecendo uma única
              página que reúne tudo o que você precisa para a melhor experiência
              de jogo.
            </CardDescription>
            <CardContent className="pt-0 p-0 max-w-xl text-gray-400">
              <ul className="mt-4 space-y-6">
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-[30px] h-[30px]" />
                  Encontre o parceiro perfeito através do duo, conquiste
                  vitórias e avalie sua performance ao final de cada partida!
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-[30px] h-[30px]" />
                  Encontre companheiros perfeitos para formar seu time ideal.
                  Acompanhe suas estatísticas e histórico de partidas
                  diretamente da API da Riot.
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-[30px] h-[30px]" />
                  Conecte-se com outros jogadores pelo chat global, adicione-os
                  como amigos e mantenha-se atualizado com suas conquistas e
                  evoluções no jogo.
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-green-500 w-[30px] h-[30px]" />
                  Socialize com outros duos, participe de eventos especiais e
                  acompanhe o desempenho deles em tempo real pela plataforma.
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
            className="w-full"
            quality={100}
            placeholder="blur"
          />
        </div>
      </Card>
    </div>
  )
}
