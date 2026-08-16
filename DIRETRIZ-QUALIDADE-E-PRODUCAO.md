# Método Presença® — Diretriz Fundamental e Padrão de Qualidade

Documento oficial de produção. Complementa BIBLIA-DO-UNIVERSO.md.

## As Quatro Dimensões Integradas

Todo episódio deve conter:

1. **Vínculo** — o adulto participa, conversa, escuta, incentiva, sorri junto. Nunca é apenas narrador.
2. **Diversão** — a criança vive uma aventura, nunca uma aula. O entretenimento conduz ao aprendizado.
3. **Desenvolvimento** — estimular ao menos uma habilidade: observação, memória, criatividade, resolução de problemas, linguagem, coordenação, imaginação, raciocínio, inteligência emocional.
4. **Valores** — um valor humano trabalhado de forma natural (nunca por explicação direta): amizade, coragem, respeito, empatia, honestidade, perseverança, responsabilidade, gratidão, cooperação, generosidade, cuidado com os animais, cuidado com a natureza, amor pela família. A criança deve concluir sozinha, com ajuda do adulto, por que aquela atitude foi importante.

## Novo Padrão de Qualidade Visual (a partir do Episódio 4)

Meta declarada: sensação de desenho animado infantil premium — personagens expressivos (olhos grandes, sobrancelhas móveis, piscadas, respiração, reações emocionais), cenários vivos (elementos sempre em movimento), movimento cinematográfico (entradas suaves, aproximações de câmera, parallax, transições orgânicas).

Direção sonora: música de abertura curta e marcante, trilha ambiente por cenário (floresta, montanha, céu, castelo, rio, noite), identidade sonora própria por personagem (Foguinho, Aurora, Lumi já especificados).

Interatividade a cada 30–60s, variando o tipo de mecânica. Ritmo alternando descoberta / exploração / interação / recompensa / conversa / evolução da história.

## Princípio da Reutilização

**Toda melhoria precisa ser reutilizável.** Nenhum componente visual, sonoro ou de animação deve ser construído pensando em um único personagem ou episódio.

Exemplos:
- O piscar dos olhos do Foguinho vira um componente disponível para todos os personagens.
- Uma animação de asas criada para a Aurora fica disponível para qualquer personagem alado.
- Um efeito de brilho novo entra na biblioteca oficial (`js/core.js` / `assets/`), não fica isolado dentro de um episódio.

Isso evita retrabalho e faz a plataforma crescer de forma organizada — cada episódio novo deve deixar a biblioteca mais rica, não apenas produzir mais um arquivo isolado.

## Checagem de Cobertura Sonora (a partir do Episódio 11)

Antes de finalizar qualquer episódio: todo personagem que aparece em cena
deve ter pelo menos um som real (arquivo da biblioteca) tocado em algum
momento — não só voz sintética via `chime()`. Se o personagem ainda não
tem som próprio, reaproveitar um som ambiente é aceitável, mas silêncio
total não é. Motivo: no Ep.9 e Ep.10 o Foguinho apareceu em várias cenas
sem nenhum som seu tocar, apesar de já ter 6 arquivos reais na biblioteca
— descuido identificado pelo Severo, não falta de material.

## Nota de viabilidade técnica (avaliação honesta, ago/2026)

O que os Episódios 1–4 entregam hoje — SVG simples com 1–2 CSS keyframes, chimes sintetizados via Web Audio API, tudo em HTML único — cumpre bem as dimensões de **Vínculo, Diversão, Desenvolvimento e Valores**, mas **ainda não chega** ao padrão visual/sonoro descrito nesta diretriz (piscadas, sobrancelhas móveis, respiração, parallax cinematográfico, trilha sonora por cenário, identidade sonora por personagem). Isso não é uma questão de esforço de código — é um patamar de produção diferente:

- **Personagens expressivos de verdade** (piscar, sobrancelha, micro-expressões) normalmente exigem arte vetorial rigada (ex.: Rive/Lottie) ou animação quadro a quadro feita por um ilustrador/animador — não são geradas por CSS/SVG genérico com qualidade consistente.
- **Trilha sonora e identidade sonora por personagem** exigem composição/produção musical real — os chimes sintetizados atuais são um recurso de fallback, não substituem uma trilha composta.
- **Parallax e movimento de câmera cinematográfico** são viáveis em CSS/JS com mais camadas e esforço, e podem evoluir de forma incremental dentro da arquitetura atual.

Este arquivo existe para que a lacuna entre a visão (este documento) e a entrega técnica atual fique registrada e não seja perdida — e para que a decisão de quanto investir em produção externa (ilustração, animação, trilha) seja tomada conscientemente, não por omissão.
