import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function FeatureCard() {
  return (
    <Card className="max-w-lg bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <CardHeader>
        <p className="text-sm font-semibold text-indigo-500">Só no Match</p>
        <CardTitle className="text-2xl font-bold mt-2">Perfis Match</CardTitle>
        <CardDescription className="text-gray-400 mt-2">
          Pensa no teu perfil como uma montra dos teus feitos no jogo e de quem és como jogador. O nosso objetivo é fazer com que só precise de uma página para todas as tuas necessidades de jogo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mt-4 space-y-2">
          <li>
            Ligar <strong>todas</strong> as tuas contas de jogo para um acompanhamento num único perfil
          </li>
          <li>
            Receber avaliações dos teus duos e uma classificação de duos que mostra a vossa qualidade como duos
          </li>
          <li>
            Carrega clipes e capturas de ecrã das tuas conquistas - Em breve
          </li>
          <li>
            Socializa com outros duos na plataforma - Em breve
          </li>
        </ul>
      </CardContent>
      <CardFooter className="mt-6">
        <p className="text-gray-400 text-sm">© 2024 Match. Todos os direitos reservados.</p>
      </CardFooter>
    </Card>
  );
}
