import { Button } from './ui/button'

export default function HowItWorksStep() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-5xl font-bold text-white">Como funciona?</h1>
      <div className="flex ">
        <Button>01</Button>
        <div className="">
          <h2 className="text-3xl font-bold text-white">Crie o seu Perfil</h2>
          <h4 className="text-white max-w-xs py-4">
            Começa por iniciar sessão através do Discord e conecta o teu perfil
            principal de League of Legends e das tuas smurfs.
          </h4>
        </div>
        <div className="flex">
          <Button>01</Button>
          <div className="">
            <h2 className="text-3xl font-bold text-white">
              Encontra o teu duo
            </h2>
            <h4 className="text-white max-w-xs py-4">
              Encontra o teu par navegando pelas publicações de duos no nosso
              site ou encontrando um através dos nossos servidores de Discord.
            </h4>
          </div>
        </div>
        <div className="flex  ">
          <Button>01</Button>
          <div className="">
            <h2 className="text-3xl font-bold text-white">Joga & Avalia</h2>
            <h4 className="text-white max-w-xs py-4">
              Quando tiveres encontrado e jogado com um duo, podes avaliá-lo
              através de métricas relacionadas com o jogo.
            </h4>
          </div>
        </div>
      </div>
      <Button>Criar o seu perfil</Button>
    </div>
  )
}
