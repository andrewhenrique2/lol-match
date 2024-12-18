'use client'

import styled from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

// Wrapper estilizado usando styled-components
const Wrapper = styled.div`
  background: linear-gradient(to bottom, #000000, #09090b); /* Gradiente mais escuro */
  width: 100%;
  clip-path: polygon(0 -10%, 100% 20%, 100% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0; /* Espaçamento interno */
  min-height: 100vh; /* Mantém a seção centralizada na tela */
`

// Componente AccordionSection, utilizando Wrapper
const AccordionSection = () => {
  return (
    <Wrapper>
      <div className="w-full max-w-3xl p-6 sm:p-8 lg:p-12  rounded-lg shadow-xl ">
        <h2 className="text-4xl md:text-5xl font-bold text-lime-500 text-center mb-10">
          Alguma dúvida? <br /> Nós temos respostas!
        </h2>

        <Accordion type="single" collapsible className="space-y-6 mb-11 ">
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="
                text-xl md:text-2xl 
                text-white 
                border-b border-zinc-700 
                py-4 
                transition-colors 
                duration-300 
                hover:text-lime-400
                focus:text-lime-500 
                [data-state='open']:text-lime-500"
            >
              O que é Match?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 mt-3 text-lg md:text-xl">
              O Match é uma plataforma ideal para jogadores encontrarem o
              parceiro perfeito para formar duos e jogar juntos. Além disso,
              você pode participar de eventos como o Clash e interagir com
              outros gamers em um chat em tempo real.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger
              className="
                text-xl md:text-2xl 
                text-white 
                border-b border-zinc-700 
                py-4 
                transition-colors 
                duration-300 
                hover:text-lime-400
                focus:text-lime-500
                [data-state='open']:text-lime-500"
            >
              Como é que funciona?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 mt-3 text-lg md:text-xl">
              No Match, tudo começa criando seu perfil de jogador. A partir daí,
              você pode procurar por duos ou formar times completos para eventos
              como o Clash. Basta navegar pelas publicações, encontrar parceiros
              ideais e começar a jogar. Além disso, você pode interagir com
              outros jogadores em tempo real pelo chat, tornando a experiência
              ainda mais imersiva e divertida.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger
              className="
                text-xl md:text-2xl 
                text-white 
                border-b border-zinc-700 
                py-4 
                transition-colors 
                duration-300 
                hover:text-lime-400
                focus:text-lime-500
                [data-state='open']:text-lime-500"
            >
              Que jogos é que o Match suporta?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 mt-3 text-lg md:text-xl">
              Atualmente, o Match é totalmente focado em League of Legends
              (LoL). Nossa plataforma foi projetada para conectar jogadores
              desse universo, ajudando você a encontrar duos perfeitos, montar
              times para o Clash e interagir com outros fãs do jogo em tempo
              real.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger
              className="
                text-xl md:text-2xl 
                text-white 
                border-b border-zinc-700 
                py-4 
                transition-colors 
                duration-300 
                hover:text-lime-400
                focus:text-lime-500
                [data-state='open']:text-lime-500"
            >
              Custa alguma coisa?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 mt-3 text-lg md:text-xl">
              Não! O Match é totalmente gratuito. Todos os recursos da
              plataforma, como encontrar duos, formar times para o Clash e
              interagir no chat em tempo real, estão disponíveis sem qualquer
              custo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger
              className="
                text-xl md:text-2xl 
                text-white 
                border-b border-zinc-700 
                py-4 
                transition-colors 
                duration-300 
                hover:text-lime-400
                focus:text-lime-500
                [data-state='open']:text-lime-500"
            >
              Como funcionam as Avaliações?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 mt-3 text-lg md:text-xl">
              As avaliações no Match são simples e diretas. Ao visitar o perfil
              de um jogador, você pode deixar um joinha se a experiência foi
              positiva, ou um deslike se houve algo que não agradou. Dessa
              forma, ajudamos a construir uma comunidade mais saudável,
              promovendo jogadores que se destacam pela cooperação e
              comportamento positivo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Wrapper>
  )
}

export default AccordionSection
