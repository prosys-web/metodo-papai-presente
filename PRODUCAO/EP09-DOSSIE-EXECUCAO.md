# DOSSIÊ DE EXECUÇÃO — Episódio 9
## As Aventuras de Ester® — "O Jardim da Gratidão"

Documento de handoff para a IA de direção de arte. Registra o que foi
efetivamente executado (não o que foi planejado) na produção de ontem,
para orientar decisões de arte, continuidade e próximos episódios.

---

## 1. Ficha técnica do episódio

| Campo | Valor |
|---|---|
| Título | O Jardim da Gratidão |
| Valor moral | Gratidão (primeira vez trabalhado na série) |
| Letra trabalhada (discreta) | **A** — em AMOR, AMIGO, ABRAÇO, ÁGUA |
| Personagens novos | Nenhum — elenco 100% reutilizado |
| Continuidade | Início: semente verde do Ep.8. Fim: semente vira um brotinho — significado ainda **não revelado** (mistério propositalmente mantido) |
| Formato | HTML standalone + versão de repositório, sobre a Biblioteca Oficial (`css/base.css` + `js/core.js`) |
| Duração estimada | Equivalente aos episódios 5–8 (12 cenas) |

---

## 2. Estrutura de cenas executada

| # | Cena | Personagens em tela | Mecânica |
|---|---|---|---|
| 0 | Transição do Ep.8 — semente ainda brilha | Sofia (segurando a semente) | Narrativa, cena escura de abertura |
| 1 | Aurora sugere plantar a semente | Aurora | Narrativa |
| 2 | Escolha do lugar pra plantar | — (ícones: ☀️ 💧 🌳) | Escolha livre, sem certo/errado |
| 3 | Plantam juntos; Aurora explica que a semente precisa de gratidão, não só água | Aurora, Foguinho | Narrativa (gancho temático) |
| 4–8 | Rodada de gratidão — cada personagem agradece Ester por algo específico de um episódio anterior | Foguinho (Ep.4) → Lili (Ep.6) → Pipo (Ep.6/7) → Carvalho (Ep.7) → Sofia (Ep.8) | 5 cenas sequenciais, uma fala cada, callback direto à jornada |
| 9 | Ester agradece alguém | Lumi, Sofia | `conversaCard` — pergunta aberta pro adulto conduzir com a criança |
| 10 | Palavras da gratidão (AMOR · AMIGO · ABRAÇO · ÁGUA) → revelação leve da letra A | Aurora (na revelação) | Carrossel de palavras, igual ao mecanismo já usado nos Ep.5/6 |
| 11.0 | A semente reage — brotinho aparece | Foguinho, Pipo | Botão "Regar com gratidão" |
| 11.1 | Comemoração em camadas | Foguinho, Pipo, Sofia, Lili | Botão "Comemorar!", repetível |
| 11.2 | Abraço do Papai | Foguinho | Botão infinito, padrão de todos os episódios |
| 11.3 | Gancho pro Episódio 10 | Carvalho | Fade final, brotinho brilha à noite |

**Nota de arquitetura:** as 4 últimas sub-cenas (11.0–11.3) são geridas por uma máquina de estados interna (`finalStep`) separada da navegação padrão por `scene`, porque dependem de sequência forçada (não fazia sentido permitir pular a rega antes da comemoração). Isso é uma decisão técnica, não visual — mencionado aqui só para o caso de a direção de arte precisar prever animações em sequência fixa vs. livre.

---

## 3. Elenco utilizado (sem novidades)

Aurora, Foguinho, Lili, Pipo, Sofia, Carvalho, Lumi — todos reaproveitados da biblioteca já aprovada. Tito **não** participou deste episódio (não fazia sentido narrativo).

**Poses usadas neste episódio, por personagem:**
- Aurora: `aurora-sorrindo`
- Foguinho: `foguinho-feliz`, `foguinho-empolgado`, `foguinho-comemorando`
- Lili: `lili-pousada`, `lili-voo-feliz`
- Pipo: `pipo-oficial-v1.0`, `pipo-comemorando`
- Sofia: `sofia-feliz`, `sofia-entregando-semente`
- Carvalho: `carvalho-acordado-sorrindo`, `carvalho-falando`
- Lumi: `lumi-sorrindo`

Nenhuma pose nova foi criada para este episódio — tudo já existia na biblioteca.

---

## 4. Paleta visual (nova, específica deste episódio)

Cada episódio desde o Ep.5 recebe uma paleta-tema própria, mantendo a mesma estrutura de tokens CSS. Para o Ep.9 (tom quente, gratidão):

| Token | Cor | Uso |
|---|---|---|
| `--coral` | `#FF7A5C` | Cor dominante (botões, destaques) |
| `--coral-dark` | `#C6432A` | Textos de ênfase, contorno de botão |
| `--gold` | `#F2C94C` | Acento mágico / recompensa |
| `--verde` | `#1F7A4D` | Elemento de continuidade (colina de fundo) |
| Fundo claro | gradiente pêssego `#FFF3E6 → #FFCB99` | Cenas de conteúdo |
| Fundo escuro | gradiente marrom quente `#6B3420 → #2A160C` | Abertura e encerramento |

Motivo da escolha: diferenciar visualmente do verde-esmeralda dos Ep.5–8 (tema Diamante Verde / floresta), sinalizando um tom mais quente e afetivo condizente com "gratidão", sem quebrar a gramática visual da série (mesma estrutura de cartão, mesma tipografia, mesmo padrão de botões).

---

## 5. Trilha sonora executada

**Sons reais usados** (biblioteca já populada — 15 arquivos reais no total do projeto até ontem):
- `weather/vento-leve.mp3`
- `ambience/passaros.mp3`
- `rewards/brilho.mp3` (usado 2x: plantio e reação da semente)

**Sons sintéticos via `chime()`** (fallback já embutido no `core.js`, sem depender de arquivo): usado em todas as 5 falas de gratidão (cenas 4–8) e no carrossel de palavras — isso supre a ausência de arquivos reais dedicados a esses momentos.

**Lacuna identificada (relevante para a direção de arte/som):** a biblioteca de áudio ainda tem a maioria dos arquivos como placeholders vazios (0 bytes) — reservados desde o início do projeto, nunca preenchidos. Links já indicados ao Severo para preencher em breve:
- Brilho mágico / tilintar (busca Pixabay: "magical chimes")
- Semente brotando (busca Pixabay: "plant growing")
- Harpa suave, como assinatura sonora da Aurora (busca Pixabay: "harp")

---

## 6. Sistema de perfis de voz (novo, iniciado ontem — relevante para IA de direção)

Foi definido um sistema de **ajuste leve de pitch** sobre a voz gravada do papai (não é clonagem de voz nem TTS — é pitch shift via `ffmpeg` + filtro `rubberband`, preservando a velocidade natural da fala). Documentado em `PRODUCAO/08-perfis-de-voz/PERFIS-DE-VOZ.md`.

| Personagem | Ajuste definido |
|---|---|
| 🌳 Carvalho | −14% (mais grave) |
| ⭐ Lumi | +8% (mais aguda) |
| Demais | a definir — provavelmente natural (0%), diferenciados só por ritmo de fala |

Também foi iniciada uma **lista de bordões** (falas curtas de assinatura, 2 por personagem) para gravação futura — ainda não gravadas, apenas roteirizadas.

---

## 7. Pendência de arte em aberto (bloqueante, não afeta este episódio)

Sofia e Tito seguem com arte em **renderização 3D (CGI)**, incompatível com o padrão 2D flat do resto do elenco. Decisão já tomada em 12/08: **regenerar ambos em 2D flat**. Prompts já entregues ao Severo; imagens novas aguardadas. O Episódio 9 não usa Tito e usa Sofia só de forma leve (2 poses, sem protagonismo), então o impacto visual da pendência foi baixo neste episódio especificamente — mas segue bloqueante para qualquer episódio futuro que dependa fortemente desses dois personagens.

---

## 8. Aprendizados para os próximos episódios

- O formato "callback emocional" (cada personagem relembrando um momento específico de um episódio anterior) funcionou bem como forma de trabalhar um valor moral sem virar aula — vale repetir esse mecanismo com moderação, não em todo episódio, para não perder o efeito.
- Paleta-tema por episódio (mantendo a gramática visual comum) está se consolidando como padrão da série — cada episódio a partir do Ep.5 tem sua cor dominante própria.
- A letra do episódio já variou entre E (Ep.5, Ep.6) e A (Ep.9) — próximos episódios devem evitar repetir E ou A sem necessidade narrativa, para dar variedade pedagógica ao longo da temporada.
