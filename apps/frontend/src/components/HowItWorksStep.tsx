import { Button } from './ui/button'
import { Card, CardTitle, CardDescription } from './ui/card'

export default function HowItWorksStep() {
  return (
    <div className="flex flex-col items-center gap-24 pt-12 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 text-center">
        Como funciona?
      </h1>

      {/* Cards para cada passo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        <Card
          className="
            justify-center 
            p-8 
            bg-card 
            shadow-md 
            rounded-lg 
            flex 
            flex-col 
            items-center 
            border 
            border-transparent 
            transition-all 
            duration-300 
            hover:border-lime-500 
            hover:border-[1px]
          "
        >
          <Button
            className="
              mb-4 
              bg-lime-600 
              hover:bg-lime-500 
              text-white 
              text-lg 
              py-6 
              px-6 
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
            01
          </Button>
          <CardTitle className="text-center text-white text-2xl md:text-3xl lg:text-4xl">
            Crie o seu Perfil
          </CardTitle>
          <CardDescription className="text-zinc-400 max-w-xs sm:max-w-md py-4 text-center text-base md:text-lg lg:text-xl">
            Começa por iniciar sessão através do Discord e conecta o teu perfil
            principal de League of Legends e das tuas smurfs.
          </CardDescription>
        </Card>

        <Card
          className="
            justify-center 
            p-8 
            bg-card 
            shadow-md 
            rounded-lg 
            flex 
            flex-col 
            items-center 
            border 
            border-transparent 
            transition-all 
            duration-300 
            hover:border-lime-500 
            hover:border-[1px]
          "
        >
          <Button
            className="
              mb-4 
              bg-lime-600 
              hover:bg-lime-500 
              text-white 
              text-lg 
              py-6 
              px-6 
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
            02
          </Button>
          <CardTitle className="text-center text-white text-2xl md:text-3xl lg:text-4xl">
            Encontra o teu duo
          </CardTitle>
          <CardDescription className="text-zinc-400 max-w-xs sm:max-w-md py-4 text-center text-base md:text-lg lg:text-xl">
            Encontra o teu par navegando pelas publicações de duos no nosso site
            ou encontrando um através dos nossos servidores de Discord.
          </CardDescription>
        </Card>

        <Card
          className="
            justify-center 
            p-8 
            bg-card 
            shadow-md 
            rounded-lg 
            flex 
            flex-col 
            items-center 
            border 
            border-transparent 
            transition-all 
            duration-300 
            hover:border-lime-500 
            hover:border-[1px]
          "
        >
          <Button
            className="
              mb-4 
              bg-lime-600 
              hover:bg-lime-500 
              text-white 
              text-lg 
              py-6 
              px-6 
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
            03
          </Button>
          <CardTitle className="text-center text-white text-2xl md:text-3xl lg:text-4xl">
            Joga & Avalia
          </CardTitle>
          <CardDescription className="text-zinc-400 max-w-xs sm:max-w-md py-4 text-center text-base md:text-lg lg:text-xl">
            Quando tiveres encontrado e jogado com um duo, podes avaliá-lo
            através de métricas relacionadas com o jogo.
          </CardDescription>
        </Card>
      </div>

      {/* Botão Final */}
      <Button
        className="
          bg-lime-600 
          hover:bg-lime-500 
          text-white 
          text-lg 
          py-6 
          px-6 
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
        Criar o seu perfil
      </Button>
    </div>
  )
}
