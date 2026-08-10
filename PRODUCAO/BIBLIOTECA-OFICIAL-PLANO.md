# Biblioteca Oficial do Método Presença® — Plano da Fase 2

Documento de planejamento (não é briefing de design — ver DOSSIE-DESIGN-IA.md para isso). Registra a direção estratégica recebida para a construção do acervo reutilizável.

## Política de "Personagem Oficial"

Uma vez gerada e aprovada, a versão visual de um personagem é definitiva — nunca é regerada do zero.
Nomenclatura de versão: `Foguinho Oficial v1.0`, `Aurora Oficial v1.0`, `Lumi Oficial v1.0`, etc.
Evoluções futuras (ex.: v1.1, v2.0) só ocorrem por decisão explícita, nunca por geração aleatória nova.

**Risco prático a testar cedo:** gerar 8–12 poses consistentes do mesmo personagem por IA é mais difícil do que parece — geralmente exige um fluxo de imagem-a-imagem com referência fixa, ou um ilustrador vetorizando/ajustando depois para garantir consistência entre poses.

## Guia de estilo (âncora oficial)

> "Todos os personagens devem seguir estilo desenho infantil 2D premium, cores vibrantes, contornos suaves, aparência acolhedora."

Toda nova imagem gerada deve ser avaliada contra essa frase antes de entrar na biblioteca.

## Estrutura definitiva do repositório (`/assets`)

```
assets/
├── characters/
│   ├── foguinho/
│   ├── aurora/
│   ├── lumi/
│   ├── lili/
│   ├── pipo/
│   └── carvalho/
├── backgrounds/
│   ├── floresta/
│   ├── montanha/
│   ├── ceu/
│   ├── rio/
│   ├── noite/
│   ├── castelo/
│   └── jardim/
├── objects/
│   ├── flores/ pedras/ estrelas/ coracoes/ medalhas/
│   ├── bau/ pergaminho/ arvore/ chave/
├── audio/
│   ├── ambience/ ui/ characters/ rewards/ weather/
├── music/
│   ├── opening/ forest/ adventure/ emotional/ ending/
├── animations/
│   ├── css/ js/
├── fonts/
├── icons/
└── particles/
```

Esta estrutura substitui a versão mais simples usada no Episódio 4 (`assets/audio`, `assets/images` genéricos) — é considerada **praticamente definitiva** e deve ser adotada quando a produção de assets começar de fato.

## Metas objetivas (até o Episódio 10)

- 20–30 personagens e poses (principais e secundários)
- 50–80 efeitos sonoros (personagens, interface, ambiente)
- 20–30 trilhas e sons ambientes (chuva, vento, floresta, rio, noite...)
- 30–50 elementos visuais reutilizáveis (flores, estrelas, corações, baús, árvores, pedras, nuvens, medalhas, peças da Chave da Imaginação)

## Personagens — poses planejadas

**Foguinho:** parado, sorrindo, voando, feliz, triste, assustado, comemorando, pensando, dormindo, soltando fumaça.
**Aurora:** pousada, voando, sorrindo, olhando para baixo, asas abertas, olhos fechados, apontando com a asa.
**Lumi:** brilho pequeno, brilho médio, brilho forte, girando, piscando, comemorando.

## Ambientes prioritários

🌳 Floresta da Imaginação · 🏔 Montanha da Coragem · 🌙 Céu das Estrelas · 🌸 Jardim das Descobertas · 🌧 Floresta Chuvosa · 🌈 Vale do Arco-Íris

## Biblioteca sonora — categorias

- **Ambiente:** chuva leve, chuva forte, trovão distante, trovão próximo, vento leve, vento na floresta, água corrente, riacho, cachoeira, pássaros, coruja, grilos, folhas.
- **Interface:** botão, clique, estrela, prêmio, medalha, coração, brilho, portal, pergaminho.
- **Personagens:** Foguinho, Aurora, Lumi, Pipo (respiração, risada, passos, asas, etc. — separados, para a IA de desenvolvimento combinar conforme a cena).
- **Música:** uma faixa longa em loop perfeito por ambiente (ex.: `forest_theme.mp3`, ~2min, loop infinito).

## Onde buscar assets prontos (sons e música — não personagens/cenários exclusivos)

| Fonte | Uso | Licenciamento (verificado ago/2026) |
|---|---|---|
| [Pixabay](https://pixabay.com/sound-effects/) / [Pixabay Music](https://pixabay.com/music/) | Efeitos e música | Licença própria da Pixabay — uso comercial livre, sem atribuição obrigatória. Não pode revender o arquivo isolado. |
| [Mixkit](https://mixkit.co/free-sound-effects/) / [Mixkit Music](https://mixkit.co/free-stock-music/) | Efeitos e música | Free License — uso comercial livre, sem atribuição. Existe também uma "Restricted License" só para uso pessoal — checar qual licença está anexada a cada item. |
| [Freesound](https://freesound.org) | Efeitos | **Licenças mistas** (CC0, CC-BY, CC-BY-NC). Filtrar por licença é obrigatório — CC-BY-NC não pode ser usado comercialmente. |
| [OpenGameArt](https://opengameart.org) | Efeitos, alguns visuais | **Licenças mistas** — mesmo cuidado do Freesound. |
| [Flaticon](https://www.flaticon.com) | Ícones | Verificar licença por ícone (muitos exigem atribuição no plano gratuito). |
| [Google Fonts](https://fonts.google.com) | Fontes | Todas open source, uso comercial livre. |
| [Storyset](https://storyset.com) | Ilustrações vetoriais | Verificar termos por ilustração (geralmente livre com ou sem atribuição, checar cada uma). |
| [Subtle Patterns / Toptal](https://www.toptal.com/designers/subtlepatterns/) | Texturas | Verificar termos de uso atuais. |

## Divisão de esforço: IA generativa vs. biblioteca profissional

- **Usar IA para:** personagens exclusivos, cenários exclusivos, objetos exclusivos (identidade única da marca).
- **Usar biblioteca profissional para:** chuva, vento, água, trovão, folhas, pássaros — sons naturais gravados são mais ricos e convincentes do que qualquer síntese, e as licenças acima cobrem uso comercial sem custo.
