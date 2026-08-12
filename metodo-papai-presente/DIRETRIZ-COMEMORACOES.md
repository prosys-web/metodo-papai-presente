# Método Presença® — Diretriz Premium: Comemorações

Documento oficial. Complementa BIBLIA-DO-UNIVERSO.md (Diretriz de Ouro) e DIRETRIZ-QUALIDADE-E-PRODUCAO.md.

## Filosofia

Toda conquista importante deve gerar uma pequena celebração visual. A comemoração não é apenas um efeito gráfico — é um reforço emocional positivo. O objetivo é fazer a criança sentir que cada pequena conquista vale a pena.

As comemorações devem ser delicadas, bonitas e transmitir carinho. Nunca exageradas, nunca poluídas, sempre leves.

## Biblioteca Oficial de Celebrações

### Nível 1 — Pequena descoberta
Quando a criança acerta uma resposta simples.
- Mostrar: ✨ pequenas estrelinhas douradas
- Som: pling
- Duração: 1 segundo

### Nível 2 — Missão concluída
Quando encontra uma estrela/completa uma etapa.
- Mostrar: ⭐ estrelas, 🌸 pequenas flores rosas, 💖 alguns corações
- Som: pling + música suave

### Nível 3 — Grande conquista
Quando ajuda o personagem principal / momento clímax do episódio.
- Mostrar simultaneamente: ❤️ corações, 🌹 rosas vermelhas, 🌸 flores rosas, ⭐ estrelas douradas, ✨ brilhos, confetes dourados
- Duração: ~2-3 segundos

## Movimento (regra para todos os níveis)

Os elementos nunca simplesmente surgem e somem. Sempre: sobem lentamente, giram levemente, desaparecem suavemente.

## Recompensa Final (encerramento do episódio)

1. Tela limpa.
2. Aurora sorri. Foguinho sorri. Lumi gira ao redor.
3. Aparece o botão grande "❤️ Abraço do [Papai/Mamãe/Vovó/Vovô]".
4. Ao clicar: a tela se enche lentamente de corações, rosas vermelhas, flores rosas, estrelas douradas e brilhos, com uma pequena melodia de vitória. Foguinho abre os braços, Aurora sorri, Lumi gira em volta.
5. Mensagens no centro, em sequência: "Parabéns, Ester!" → "Você fez um amigo muito especial hoje!" → "Agora é hora do abraço do papai!"

## Botão Especial (regra de persistência)

O botão de abraço **nunca desaparece** — permanece disponível até o adulto fechar o episódio. Pode ser clicado quantas vezes a criança desejar.

Cada clique gera uma celebração diferente, combinando aleatoriamente corações, rosas vermelhas, flores rosas, estrelas e brilhos. A cada novo clique: muda a distribuição, muda a velocidade das partículas, alterna suavemente a trilha sonora, e evita repetir exatamente a mesma combinação do clique anterior. Cada abraço deve parecer único.

## Adaptação por contexto do Método Presença®

Apenas o texto do botão muda conforme a aplicação do método ("Abraço da Mamãe", "Abraço da Vovó", "Abraço do Vovô"...) — a experiência emocional (persistência, aleatoriedade, nunca repetir, mensagens finais) permanece idêntica.

## Implementação técnica

Funções em `js/core.js`:
- `celebrationTier1()` — ✨ douradas, 1s.
- `celebrationTier2()` — ⭐ + 🌸 + 💖.
- `celebrationTier3()` — ❤️ + 🌹 + 🌸 + ⭐ + ✨ + confete dourado, 2-3s.
- `hugCelebration()` — combinação aleatória sem repetir a anterior, variando quantidade/velocidade a cada clique.

Todas usam o movimento padrão (subir + girar + desaparecer suavemente) via a classe CSS `.mp-float-gentle` em `css/base.css`.
