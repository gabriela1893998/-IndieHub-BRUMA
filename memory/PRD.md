# PRD — BRUMA Game Launcher

## Problema original
Criar a interface de uma plataforma web de jogos estilo launcher/client em dark mode: fundo escuro fosco, paleta roxo vibrante/lilás, top bar com logo BRUMA + search + perfil, sidebar esquerda (Home ativo, Friends com badge "2", Settings/Help, botão "Go to library"), área principal com tags (Magic, Fantasy, Open World, Adventure), hero banner "magia da floresta" (botões "descrição" e "jogar"), seção "Jogos Indies" com 3 cards, e sidebar direita com "Friends online" (7 usuários) e "Recentemente jogado" com barras de progresso roxas. Layout responsivo em grid, hover nos botões.

## Decisões do usuário
- Somente interface estática com dados de exemplo (sem backend).
- Busca e tags apenas visuais (tags alternam estado ativo, sem filtro real).
- Imagens curadas de fantasia/magia.

## Arquitetura
- Frontend-only: React + Tailwind + framer-motion + lenis.
- Componentes: TopBar, Sidebar, Hero (reveal mascarado + parallax por mouse), Marquee editorial, IndieGames, RightPanel; dados em src/data/launcherData.js.
- Backend FastAPI/MongoDB mantido intacto (não utilizado pela UI).

## Personas
- Jogador que quer um hub visual para descobrir e lançar jogos.

## Requisitos implementados (22/10/2026)
- Top bar fixa: logo BRUMA com marca SVG (também favicon), search central com atalho Ctrl K, mensagens (badge 3), notificações, perfil "testando 1" com status online.
- Sidebar esquerda: 7 links com ícones, Home ativo, badge "2" em Friends, Settings/Help, CTA "Go to library" com glow.
- Tags selecionáveis (estado ativo roxo com glow).
- Hero "magia da floresta": reveal linha a linha mascarado, parallax de imagem por mouse, botões "descrição" (roxo escuro) e "jogar" (lilás com glow).
- Marquee editorial lenta entre hero e indies.
- 3 cards de jogos indies com arte, gênero, resumo e botão "descrição".
- Sidebar direita: 7 amigos online com avatar/status/jogo atual; 4 itens "Recentemente jogado" com barras de progresso animadas.
- Responsivo: 375/768/1366px verificados; scroll suave via lenis; grain overlay e glows ambientes.
- data-testid em todos os elementos interativos (verificado: nenhum faltando).

## Backlog
- P0: (nenhum pendente do escopo pedido)
- P1: páginas internas (Library, Friends, perfil de jogo), busca funcional com filtro real
- P2: alternância de destaque do hero por tag, temas de cor, backend de catálogo

## Próximas tarefas sugeridas
- Modal/página de detalhes do jogo ao clicar em "descrição"
- Biblioteca com jogos instalados e progresso de download
- Filtro real da busca e das tags
