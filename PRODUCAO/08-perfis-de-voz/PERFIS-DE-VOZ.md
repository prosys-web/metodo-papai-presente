# Perfis de Voz — As Aventuras de Ester®

Ajuste de pitch aplicado à voz do papai (Severo) para diferenciar sutilmente
cada personagem, mantendo a velocidade natural da fala (via ffmpeg + filtro
rubberband — não é clonagem de voz, é só um ajuste leve de tom).

Regra geral: doses pequenas (até ~15%). Acima disso o efeito começa a soar
artificial e perde o calor da voz real do papai — o que é o ponto central
do produto. Ritmo e energia na hora de gravar continuam sendo a principal
forma de diferenciar os personagens; o pitch é só um tempero opcional.

## Perfis definidos

| Personagem | Ajuste de pitch | Status |
|---|---|---|
| 🌳 Carvalho | -14% (mais grave) | ✅ aprovado em 13/08 |
| ⭐ Lumi | +8% (mais aguda) | ✅ aprovado em 13/08 |
| 🐉 Foguinho | natural (0%) | a definir — provável natural, diferenciado só pelo ritmo |
| 🦉 Aurora | natural (0%) | a definir |
| 🦋 Lili | a definir | candidata a leve ajuste agudo, ainda não testado |
| 🐿️ Pipo | a definir | provável natural — ritmo acelerado já diferencia bastante |
| 🐰 Sofia | a definir | ainda não testado |
| 🐘 Tito | a definir | ainda não testado |

## Comando técnico de referência

```
ffmpeg -i entrada.m4a -af "rubberband=pitch=0.86" -c:a libmp3lame -q:a 2 saida.mp3
```
(0.86 = Carvalho · 1.08 = Lumi · 1.0 = natural, sem alteração)

## Lista de bordões roteirizados (ainda não gravados)

Registrado em 13/08 — falas curtas de assinatura por personagem, 2 cada,
para gravação futura sem pressão de fazer tudo de uma vez.

- **Aurora:** "Vamos pensar juntos..." (calmo/reflexivo) · "Isso mesmo, Ester!" (orgulho suave)
- **Foguinho:** "Uhuul, vamos lá!" (empolgado) · "Isso pede um abraço!" (carinhoso)
- **Lumi:** "Brilha, brilha!" (animada) · "Eba, conseguimos!" (festiva)
- **Lili:** "Tenho uma novidade!" (curiosa) · "Voando pra te ajudar!" (gentil)
- **Pipo:** "Espera, tenho uma ideia!" (afobado) · "Funcionou... será?" (inseguro/engraçado)
- **Sofia:** "Posso contar uma coisa?" (tímida) · "Obrigada por me ouvir." (grata)
- **Carvalho:** "Algumas coisas levam tempo..." (grave/devagar) · "Eu me lembro disso." (nostálgico)
- **Tito:** "Nossa, que legal!" (encantado) · "Eu também não sabia disso!" (humilde)

Fluxo de produção: Severo grava natural (sem se preocupar com tom) → envia
o áudio → Claude aplica o pitch do personagem (se definido) → organiza em
`assets/audio/marcas/{personagem}/{personagem}-bordao-01.mp3`.
