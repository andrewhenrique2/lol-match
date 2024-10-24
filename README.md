# LOL-MATCH
## Descrição:
LOL-MATCH é um projeto em andamento que visa criar uma plataforma interativa para fãs de League of Legends. O objetivo é conectar jogadores, facilitando a busca por parceiros de jogo e oferecendo um sistema de chat em tempo real, além de integrações com dados relevantes do jogo.

Status do Projeto:
Atualmente, o LOL-MATCH está em desenvolvimento. As principais funcionalidades estão sendo implementadas, e feedbacks são bem-vindos!

Recursos Planejados:
Sistema de Matching: Algoritmos que conectarão jogadores com base em suas habilidades e preferências.
Chat em Tempo Real: Permite comunicação instantânea entre os usuários.
Perfis de Jogadores: Criação de perfis com estatísticas de desempenho e conquistas.
Integração com a Riot Games API: Acesso a dados como status de Clash, rankings e estatísticas dos jogadores.
Tecnologias Utilizadas:
Banco de Dados:

Firebase (Firestore/Realtime Database): Proporciona sincronização em tempo real, ideal para a atualização instantânea de dados.
Autenticação:

Firebase Authentication (Google Login): Simplifica o fluxo de autenticação, garantindo segurança e facilidade de uso.
APIs Externas:

Riot Games API: Para integrar dados relevantes do jogo à aplicação.
Notificações:

Firebase Cloud Messaging (FCM): Envio de notificações em tempo real para alertas de mensagens e atualizações.
Monitoramento:

Sentry: Para rastreamento de erros e performance.
LogRocket (opcional): Para gravação de sessões e análise da interação do usuário.
Containerização:

Docker: Para garantir consistência entre ambientes e facilitar o deploy.
CI/CD:

Vercel: Hospedagem do front-end com Next.js.
GitHub Actions: Execução de testes automatizados a cada pull request ou merge.
Testes:

Jest: Para testes unitários e de integração.
Cypress: Para testes end-to-end.
Segurança:

Helmet.js: Para proteger a aplicação configurando cabeçalhos HTTP seguros.
Rate Limiting (express-rate-limit): Para prevenir ataques de força bruta.
