/* ============================================================
   MÉTODO PRESENÇA® — BIBLIOTECA OFICIAL
   js/core.js — motor de som, efeitos visuais e helpers de roteiro,
   compartilhado por todos os episódios a partir do Episódio 4.

   Cada episódio inclui este arquivo via <script src="../../js/core.js">
   e depois define seu próprio estado, cenas e conteúdo.
   ============================================================ */

/* ---------- Som: efeitos sintetizados (sempre funcionam, sem arquivo) ---------- */
let mpAudioCtx = null;
function chime(freqs=[880,1320]){
  try{
    mpAudioCtx = mpAudioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const now = mpAudioCtx.currentTime;
    freqs.forEach((f,i)=>{
      const osc = mpAudioCtx.createOscillator(); const gain = mpAudioCtx.createGain();
      osc.type='sine'; osc.frequency.value=f;
      gain.gain.setValueAtTime(0.0001, now+i*0.09);
      gain.gain.linearRampToValueAtTime(0.12, now+i*0.09+0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now+i*0.09+0.25);
      osc.connect(gain).connect(mpAudioCtx.destination);
      osc.start(now+i*0.09); osc.stop(now+i*0.09+0.3);
    });
  }catch(e){ /* som indisponível — a experiência continua normalmente */ }
}

/* ---------- Voz do papai (arquivos opcionais, por episódio) ---------- */
function playVoice(fileBase){
  try{ const a = new Audio('audio/'+fileBase+'.mp3'); a.play().catch(()=>{}); }catch(e){}
}

/* ---------- Efeitos sonoros compartilhados (biblioteca /assets/audio) ----------
   Caem de volta para o chime() sintetizado se o arquivo mp3 ainda não existir,
   então o app sempre funciona mesmo sem nenhum asset gravado. */
const MP_SFX_PATH = '../../assets/audio/';
function playSfx(name, fallbackFreqs){
  try{
    const a = new Audio(MP_SFX_PATH + name + '.mp3');
    a.play().catch(()=>{ if(fallbackFreqs) chime(fallbackFreqs); });
  }catch(e){ if(fallbackFreqs) chime(fallbackFreqs); }
}

/* ---------- Cartões de roteiro (para o papai) ---------- */
function papaiCard(fala, direcao){
  return `<div class="papai-card"><span class="tag">📋 PARA O PAPAI</span><br>
    ${fala ? `Diga com carinho: <q>${fala}</q>` : ''}
    ${direcao ? `<div style="margin-top:6px;">${direcao}</div>` : ''}</div>`;
}
function conversaCard(pergunta){
  return `<div class="papai-card"><span class="tag">📋 PARA O PAPAI</span><br>
    Pergunte com calma, e espere bastante: <q>${pergunta}</q>
    <div style="margin-top:6px;">Não existe resposta errada — valorize o que ela disser.</div></div>`;
}

/* ---------- Camada de efeitos visuais (partículas) ---------- */
function mpFxLayer(){
  let el = document.getElementById('fx-layer');
  if(!el){ el = document.createElement('div'); el.id='fx-layer'; el.className='fx-layer'; document.body.appendChild(el); }
  return el;
}
function confetti(count=36, colors=['#FF7A5C','#FFCE45','#4FB477','#8ED8F8','#FF9EC4','#9B7BE0']){
  const fx = mpFxLayer();
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-confetti';
    const size=6+Math.random()*6; el.style.width=size+'px'; el.style.height=(size*0.4)+'px';
    el.style.left=(Math.random()*100)+'vw'; el.style.background=colors[Math.floor(Math.random()*colors.length)];
    const d=2.2+Math.random()*1.6; el.style.animationDuration=d+'s'; el.style.animationDelay=(Math.random()*0.4)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),(d+0.5)*1000);
  }
  playSfx('rewards/aplausos',[660,990]);
}
function sparkles(count=14){
  const fx = mpFxLayer(); const icons=['⭐','✨','🌟'];
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-sparkle'; el.textContent=icons[Math.floor(Math.random()*icons.length)];
    el.style.left=(20+Math.random()*60)+'vw'; el.style.top=(30+Math.random()*40)+'vh'; el.style.animationDelay=(Math.random()*0.3)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),1200);
  }
  playSfx('rewards/brilho',[880,1320]);
}
function hearts(count=24){
  const fx = mpFxLayer();
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-heart'; el.textContent='❤️';
    el.style.left=(Math.random()*100)+'vw'; el.style.setProperty('--drift',(Math.random()*80-40)+'px');
    const d=3+Math.random()*2; el.style.animationDuration=d+'s'; el.style.animationDelay=(Math.random()*0.6)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),(d+0.8)*1000);
  }
  playSfx('rewards/coracao',[523,784,1046]);
}
function leaves(count=18){
  const fx = mpFxLayer(); const icons=['🍃','🍂','🌿'];
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-leaf'; el.textContent=icons[Math.floor(Math.random()*icons.length)];
    el.style.left=(Math.random()*100)+'vw'; el.style.setProperty('--drift',(Math.random()*100-50)+'px');
    const d=3+Math.random()*2; el.style.animationDuration=d+'s'; el.style.animationDelay=(Math.random()*0.5)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),(d+0.6)*1000);
  }
  playSfx('weather/vento-leve',[392,523]);
}
function flowers(count=16){
  const fx = mpFxLayer(); const icons=['🌸','🌼','🌷','🌻'];
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-sparkle'; el.textContent=icons[Math.floor(Math.random()*icons.length)];
    el.style.left=(10+Math.random()*80)+'vw'; el.style.top=(25+Math.random()*45)+'vh'; el.style.animationDelay=(Math.random()*0.3)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),1200);
  }
  playSfx('rewards/premio',[659,880,1109]);
}
function butterflies(count=6){
  const fx = mpFxLayer();
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-fly'; el.textContent='🦋';
    el.style.top=(15+Math.random()*55)+'vh';
    const d=2.6+Math.random()*1.4; el.style.animationDuration=d+'s'; el.style.animationDelay=(Math.random()*0.8)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),(d+1)*1000);
  }
  chime([784,988,1318]);
}
function rainbow(){
  const fx = mpFxLayer();
  const el=document.createElement('div'); el.className='mp-rainbow';
  fx.appendChild(el); setTimeout(()=>el.remove(),2500);
  playSfx('rewards/brilho',[523,659,784,1046]);
}
function medal(){
  const fx = mpFxLayer();
  const el=document.createElement('div'); el.className='mp-medal'; el.textContent='🏅';
  fx.appendChild(el); setTimeout(()=>el.remove(),1600);
  playSfx('rewards/medalha',[659,880,1318]);
}
function fireworksSoft(count=3){
  const fx = mpFxLayer(); const colors=['#FF7A5C','#FFCE45','#8ED8F8','#9B7BE0','#4FB477'];
  for(let b=0;b<count;b++){
    const cx=20+Math.random()*60, cy=20+Math.random()*40;
    for(let i=0;i<10;i++){
      const el=document.createElement('div'); el.className='mp-firework';
      const angle=(i/10)*Math.PI*2;
      el.style.left=cx+'vw'; el.style.top=cy+'vh'; el.style.background=colors[Math.floor(Math.random()*colors.length)];
      el.style.setProperty('--fx',(Math.cos(angle)*60)+'px'); el.style.setProperty('--fy',(Math.sin(angle)*60)+'px');
      el.style.animationDelay=(b*0.25)+'s';
      fx.appendChild(el); setTimeout(()=>el.remove(),(b*0.25+1)*1000);
    }
  }
  playSfx('rewards/premio',[784,1046]);
}
function crystalShine(count=8){
  const fx = mpFxLayer();
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='mp-crystal'; el.textContent='💎';
    el.style.left=(30+Math.random()*40)+'vw'; el.style.top=(35+Math.random()*20)+'vh'; el.style.animationDelay=(i*0.08)+'s';
    fx.appendChild(el); setTimeout(()=>el.remove(),1400);
  }
  chime([784,1046,1318]);
}

const REWARD_POOL = [confetti, sparkles, hearts, leaves, flowers, butterflies, rainbow, fireworksSoft];
let mpLastReward = -1;
function randomReward(){
  let idx;
  do{ idx = Math.floor(Math.random()*REWARD_POOL.length); }while(idx===mpLastReward && REWARD_POOL.length>1);
  mpLastReward = idx;
  REWARD_POOL[idx]();
}

/* ============================================================
   DIRETRIZ PREMIUM — Comemorações do Método Presença®
   Ver DIRETRIZ-COMEMORACOES.md. Movimento padrão: sobe + gira +
   desaparece suavemente (.mp-float-gentle), nunca "pop" abrupto.
   ============================================================ */
function mpFloatGentle(emoji, opts={}){
  const fx = mpFxLayer();
  const el = document.createElement('div');
  el.className = 'mp-float-gentle';
  el.textContent = emoji;
  el.style.fontSize = (opts.size || (1.3+Math.random()*0.8)) + 'rem';
  el.style.left = (opts.left != null ? opts.left : Math.random()*100) + 'vw';
  el.style.top = (opts.top != null ? opts.top : 40+Math.random()*35) + 'vh';
  el.style.setProperty('--mp-rise', (opts.rise || (-120 - Math.random()*80)) + 'px');
  el.style.setProperty('--mp-spin', (opts.spin != null ? opts.spin : (Math.random()*40-20)) + 'deg');
  const dur = opts.duration || (2 + Math.random()*1.2);
  el.style.setProperty('--mp-dur', dur+'s');
  el.style.animationDelay = (opts.delay || 0) + 's';
  fx.appendChild(el);
  setTimeout(()=>el.remove(), (dur + (opts.delay||0) + 0.3)*1000);
}

// Nível 1 — pequena descoberta: estrelinhas douradas, 1s
function celebrationTier1(){
  for(let i=0;i<6;i++){
    mpFloatGentle('✨', { delay: i*0.05, duration: 1, rise: -60-Math.random()*30 });
  }
  playSfx('rewards/pling', [1046,1568]);
}

// Nível 2 — missão concluída: estrelas + flores rosa + corações
function celebrationTier2(){
  const set = ['⭐','🌸','💖'];
  for(let i=0;i<14;i++){
    mpFloatGentle(set[Math.floor(Math.random()*set.length)], { delay: i*0.04 });
  }
  playSfx('rewards/pling', [1046,1568]);
  playSfx('rewards/brilho', [784,1046]);
}

// Nível 3 — grande conquista: tudo junto, 2-3s
function celebrationTier3(){
  const set = ['❤️','🌹','🌸','⭐','✨'];
  for(let i=0;i<26;i++){
    mpFloatGentle(set[Math.floor(Math.random()*set.length)], { delay: i*0.035, duration: 2.4+Math.random()*0.8 });
  }
  confetti(24, ['#F2C94C','#E8A800','#FFE07D']); // confete dourado
  playSfx('rewards/medalha', [659,880,1318]);
}

// Abraço do Papai — combinação aleatória, nunca repete exatamente a anterior
const HUG_EMOJI_POOL = ['❤️','🌹','🌸','⭐','✨'];
let mpLastHugSignature = '';
function hugCelebration(){
  // sorteia 3-5 emojis (com repetição permitida entre eles) formando uma "assinatura" da rodada
  let signature, tries = 0;
  do{
    const count = 3 + Math.floor(Math.random()*3); // 3 a 5 tipos
    const chosen = [];
    for(let i=0;i<count;i++) chosen.push(HUG_EMOJI_POOL[Math.floor(Math.random()*HUG_EMOJI_POOL.length)]);
    signature = chosen.sort().join('');
    tries++;
  } while(signature === mpLastHugSignature && tries < 8);
  mpLastHugSignature = signature;
  const chosenSet = [...new Set(signature.match(/./gu))];

  const particleCount = 20 + Math.floor(Math.random()*20); // varia a quantidade
  const speedFactor = 0.8 + Math.random()*0.7; // varia a velocidade
  for(let i=0;i<particleCount;i++){
    mpFloatGentle(chosenSet[Math.floor(Math.random()*chosenSet.length)], {
      delay: i*0.03,
      duration: (2 + Math.random()*1.4) * speedFactor,
      rise: -(100 + Math.random()*120)
    });
  }
  // alterna suavemente a trilha/som da rodada
  const soundChoices = [ ()=>playSfx('rewards/medalha',[659,880,1318]), ()=>playSfx('rewards/brilho',[784,1046,1318]), ()=>chime([523,659,784,1046]) ];
  soundChoices[Math.floor(Math.random()*soundChoices.length)]();
}

/* ---------- Estrelas de fundo decorativas (uso opcional pelos episódios) ---------- */
function seedBackgroundStars(container, count=18){
  for(let i=0;i<count;i++){
    const el=document.createElement('div'); el.className='star-bg';
    const size=1+Math.random()*2;
    el.style.width=size+'px'; el.style.height=size+'px';
    el.style.top=(Math.random()*60)+'%'; el.style.left=(Math.random()*96)+'%';
    el.style.animationDelay=(Math.random()*2)+'s';
    container.appendChild(el);
  }
}
