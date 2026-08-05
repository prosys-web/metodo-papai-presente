# Método Presença® — As Aventuras de Ester

## Estrutura do repositório (a partir do Episódio 4)

```
metodo-presenca/
├── assets/                  <- Biblioteca Oficial de recursos compartilhados (ativos finais)
│   ├── audio/                  efeitos sonoros reutilizáveis (opening.mp3, sparkle.mp3, dragon-puff.mp3...)
│   ├── images/
│   ├── animations/
│   ├── icons/
│   ├── particles/
│   └── fonts/
├── PRODUCAO/                 <- pré-produção (concept art, personagens, trilha, storyboard, guia de estilo)
├── css/
│   └── base.css             <- estilos e componentes compartilhados (papai-card, botões, efeitos, etc.)
├── js/
│   └── core.js               <- motor de som e efeitos compartilhado (chime, playVoice, confetti, hearts...)
├── episodes/
│   ├── episodio-01/           (autocontido — construído antes da biblioteca oficial)
│   ├── episodio-02/           (autocontido)
│   ├── episodio-03/           (autocontido)
│   └── episodio-04/           (primeiro episódio sobre a Biblioteca Oficial)
│       ├── index.html
│       └── audio/             audio01.mp3 – audio08.mp3 (voz do papai, específica deste episódio)
└── README.md
```

Os episódios 1 a 3 continuam totalmente autocontidos (todo o CSS e JS embutido no próprio HTML) — foram construídos antes da Biblioteca Oficial existir e não precisam ser migrados para funcionar. A partir do Episódio 4, todo novo episódio deve importar `../../css/base.css` e `../../js/core.js`, definindo apenas seu tema visual (cores, cenário, personagens) e sua lógica de cenas no próprio arquivo.

## Como publicar um novo episódio

1. Crie `episodes/episodio-0N/`.
2. Copie a estrutura do Episódio 4 como ponto de partida (ele já importa a biblioteca oficial).
3. Defina o tema visual (`:root` com as cores do episódio) e o conteúdo das cenas.
4. Crie `episodes/episodio-0N/audio/` com `audio01.mp3` a `audio08.mp3` — a voz do papai, específica daquele episódio.
5. Se o episódio usar um efeito sonoro novo que ainda não existe em `assets/audio/`, adicione o arquivo lá (o app já cai para um som sintetizado enquanto o arquivo não existir).
6. Suba (commit + push) para o GitHub. Com o GitHub Pages ativado, o episódio fica disponível em:
   `https://SEU-USUARIO.github.io/metodo-presenca/episodes/episodio-0N/`

## Biblioteca sonora compartilhada (`assets/audio/`)

Nomes de arquivo padronizados, todos opcionais (o app funciona sem eles, usando sons sintetizados):

`opening.mp3` · `transition.mp3` · `sparkle.mp3` · `pop.mp3` · `success.mp3` · `heart.mp3` · `flowers.mp3` · `dragon-puff.mp3` · `dragon-steps.mp3` · `puzzle.mp3` · `applause.mp3` · `birds.mp3` · `wind.mp3` · `forest.mp3` · `magic-bell.mp3`

Efeitos curtos (1–4s); ambientes como `wind`/`forest`/`birds` podem ser loops leves. Sempre em MP3, para bom desempenho e tamanho reduzido.

## Documentos oficiais do método

- **BIBLIA-DO-UNIVERSO.md** — personagens, continuidade, filosofia, valores.
- **DIRETRIZ-QUALIDADE-E-PRODUCAO.md** — as 4 dimensões de cada episódio (Vínculo, Diversão, Desenvolvimento, Valores), o padrão de qualidade visual/sonoro alvo, e uma nota honesta sobre a distância entre esse padrão e a entrega técnica atual.

## Personagens recorrentes

Ver **BIBLIA-DO-UNIVERSO.md** para o documento oficial completo (papel, personalidade, função pedagógica de cada um). Resumo:

- 🦉 **Aurora** — a Coruja Sábia, mentora da jornada (não resolve, orienta) — Árvore da Imaginação
- 🐉 **Foguinho** — o pequeno dragão, Episódio 4
- ⭐ **Lumi** — a estrela curiosa, Episódio 3 (renomeada de Luna na consolidação oficial do universo)
- 🦋 **Lili** — a borboleta mensageira, Episódio 2
- 🌳 **Carvalho** — a Árvore da Imaginação, guardião das histórias (ainda não estreou)
- 🐿️ **Pipo** — o esquilo inventor (ainda não estreou)

## Continuidade narrativa

- Episódio 2 → Episódio 3: peça de mapa entregue por Lili.
- Episódio 3 → Episódio 4: gancho da Torre dos Ventos (ainda não usado neste episódio — a trilha de estrelas levou à montanha do Foguinho).
- Episódio 4 → Episódio 5: mapa com X brilhando encontrado por Foguinho ("Será que existe um tesouro?").
- Todas as peças de mapa entregues desde o Episódio 2 fazem parte da coleção **Chave da Imaginação**.
