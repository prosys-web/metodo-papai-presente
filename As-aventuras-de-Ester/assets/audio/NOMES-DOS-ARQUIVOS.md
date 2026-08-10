# Guia de nomes — assets/audio/

Todos MP3, curtos (1-4s para efeitos; ambiente pode ser loop leve). Salve por cima do placeholder mantendo o nome.

## ambience/ (sons contínuos de fundo)
agua-corrente.mp3 · riacho.mp3 · cachoeira.mp3 · passaros.mp3 · coruja.mp3 · grilos.mp3 · folhas.mp3

## weather/ (clima)
chuva-leve.mp3 · chuva-forte.mp3 · trovao-distante.mp3 · trovao-proximo.mp3 · **vento-leve.mp3** · vento-floresta.mp3

## ui/ (interface)
botao.mp3 · clique.mp3 · portal.mp3 · pergaminho.mp3 · **encaixe.mp3** (peça de quebra-cabeça encaixando)

## rewards/ (recompensa)
estrela.mp3 · **premio.mp3** · **medalha.mp3** · **coracao.mp3** · **brilho.mp3** · **aplausos.mp3** · **pling.mp3** (descoberta pequena)

## characters/ (identidade sonora por personagem)
**foguinho-espirro-fumaca.mp3** ✅ · **foguinho-respiracao.mp3** ✅ · **foguinho-risada.mp3** ✅ · **foguinho-labareda.mp3** ✅ · foguinho-passinhos.mp3 · **foguinho-asas.mp3** ✅ · **foguinho-assustado.mp3** ✅ (novo — usado na cena da vergonha das flores, Ep. 4)
aurora-bater-asas.mp3 · aurora-pouso.mp3 · aurora-sino.mp3
lumi-brilho-cintilante.mp3 · lumi-notas-musicais.mp3

## ⚠️ Mapa de uso real (o que cada efeito do código realmente toca)

Os itens em **negrito** acima já são chamados de verdade pelo `js/core.js` e pelos episódios. Os demais existem como placeholder pra biblioteca crescer, mas ainda não são chamados por nenhum código.

| Efeito visual (código) | Arquivo de som usado |
|---|---|
| confete (missões concluídas) | `rewards/aplausos.mp3` |
| brilhos/estrelinhas soltas | `rewards/brilho.mp3` |
| corações subindo | `rewards/coracao.mp3` |
| folhas caindo | `weather/vento-leve.mp3` |
| flores flutuando | `rewards/premio.mp3` |
| arco-íris | `rewards/brilho.mp3` |
| medalha (diploma) | `rewards/medalha.mp3` |
| fogos suaves | `rewards/premio.mp3` |
| Comemoração Nível 1 (pling) | `rewards/pling.mp3` |
| Comemoração Nível 2 | `rewards/pling.mp3` + `rewards/brilho.mp3` |
| Comemoração Nível 3 / Abraço do Papai | `rewards/medalha.mp3` ou `rewards/brilho.mp3` (varia) |
| Foguinho espirra fumaça (Ep. 4, cena 1) | `characters/foguinho-espirro-fumaca.mp3` |
| Peça de quebra-cabeça encaixando (Ep. 4) | `ui/encaixe.mp3` |

Se você já baixou **vento suave** e **pling/brilho**, salve assim:
- vento suave → `assets/audio/weather/vento-leve.mp3`
- pling/brilho → pode escolher: salvar como `assets/audio/rewards/pling.mp3` (toca nas pequenas descobertas) **e também** copiar o mesmo arquivo pra `assets/audio/rewards/brilho.mp3` (toca em vários outros efeitos) — os dois usam esse tipo de som.

