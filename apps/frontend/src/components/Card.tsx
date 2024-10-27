import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
import { Check } from 'lucide-react';
import profile from '../../public/profiles.png';

export default function FeatureCard() {
  return (
    <div className="flex justify-center items-center">
      <Card
        className="flex flex-col max-w-7xl bg-card text-white p-6 rounded-lg shadow-lg border-none py-12 mt-36 lg:flex-row lg:items-start"
      >
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
              Pensa no teu perfil como uma montra dos teus feitos no jogo e de quem
              és como jogador. O nosso objetivo é fazer com que só precise de uma
              página para todas as tuas necessidades de jogo.
            </CardDescription>
            <CardContent className="pt-0 p-0 max-w-xl text-gray-400">
              <ul className="mt-4 space-y-6">
                <li className="flex gap-4 items-center">
                <Check className="text-green-500 w-20 h-20 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-[30px] lg:h-[30px]" />
                Encontre o parceiro perfeito através do duo e conquistem vitórias
                  juntos!
                </li>
                <li className="flex gap-4 items-center">
                <Check className="text-green-500 w-36 h-36 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-[60px] lg:h-[60px]" />
                Encontre os companheiros perfeitos para formar seu time ideal,
                  sincronizem estratégias e dominem o Clash juntos rumo à vitória.
                </li>
                <li className="flex gap-4 items-center">
                <Check className="text-green-500 w-16 h-16 sm:w-9 sm:h-9 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]" />
                Conecte-se e faça novas amizades pelo chat global.
                </li>
                <li className="flex gap-4 items-center">
                <Check className="text-green-500 w-16 h-16 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]" />
                Socializa com outros duos na plataforma.
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
  );
}
