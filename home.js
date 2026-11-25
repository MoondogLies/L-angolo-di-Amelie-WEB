// Codice della home page (index.html).
// Va caricato dopo eventi.js e comune.js.

// ---------- Carosello eventi ----------

const oggi=oggiMezzanotte();
eventi.sort(ordinaPerData);
let currentIndex=eventi.findIndex(e=>dataLocale(e.data)>=oggi);
if(currentIndex<0) currentIndex=eventi.length-1;
const indiceIniziale=currentIndex;
let expandedIndex=null;
let cardOriginParent=null;
let cardOriginNext=null;
const track=document.getElementById('track');
const carouselZone=document.getElementById('carouselZone');

function creaCardCarosello(e,i){
  const past=dataLocale(e.data)<oggi;
  const titolo=escapeHtml(e.titolo);
  const card=document.createElement('article');
  card.className='card'+(past?' past':'');
  card.dataset.index=i;
  const usaSlideshow=Array.isArray(e.immagini)&&e.immagini.length>1;
  const media=usaSlideshow
    ? `<div class="card-slideshow">${e.immagini.map((immagine,indice)=>`<img class="${indice===0?'attivo':''}" src="${escapeHtml(immagine)}" alt="${titolo}">`).join('')}</div>`
    : (e.video
      ? `<img class="card-video-poster" src="${escapeHtml(e.videoPoster || e.immagine)}" alt="${titolo}">`
      : `<img src="${escapeHtml(e.immagine)}" alt="${titolo}">`);
  // Il video non sta nella card: viene creato solo quando deve partire (vedi creaVideoCard)
  if(e.video && !usaSlideshow) card.dataset.video=e.video;
  // Zoom del trailer per nascondere le bande nere incise nel file (campo zoomVideo in eventi.js, tra 1 e 2)
  const zoom=Number(e.zoomVideo);
  if(zoom>1 && zoom<=2) card.dataset.zoomVideo=String(zoom);
  const sottotitolo=e.tipo==='film' ? `di ${e.regia} · ${e.paese}` : (e.tipo==='concorso' ? '' : `Con ${e.artista}`);
  const testoPulsante=e.tipo==='film' ? 'Trama' : 'Descrizione';
  const nomiOspiti=e.ospiti ? e.ospiti.split(',').map(nome=>nome.trim()).filter(Boolean) : [];
  const etichettaOspiti=nomiOspiti.length===1 ? 'Ospite' : 'Ospiti';
  const ospiti=nomiOspiti.length ? `<span class="card-ospiti">${etichettaOspiti}: ${escapeHtml(nomiOspiti.join(', '))}</span>` : '';
  const supporto=e.supporto ? `<div class="card-supporto"><img src="${escapeHtml(e.supporto)}" alt="Logo del sostenitore dell’evento"></div>` : '';
  const logoAlto=e.logoAlto ? `<div class="card-logo-alto"><img src="${escapeHtml(e.logoAlto)}" alt="Logo della rassegna"></div>` : '';
  card.innerHTML=`
    <div class="card-poster">
      ${media}
      ${logoAlto}
      ${supporto}
      <div class="card-info">
        <span class="card-date">${formattaData(e.data,escapeHtml(e.ora))}</span>
        ${ospiti}
        ${htmlRassegna(e)}
        <h3>${titolo}</h3>
        ${sottotitolo ? `<p class="sottotitolo">${escapeHtml(sottotitolo)}</p>` : ''}
        <button class="sinossi-btn" type="button">${testoPulsante}</button>
      </div>
    </div>
    <div class="card-details"><p class="desc">${escapeHtml(e.descrizione || 'La descrizione dell’evento sarà presto disponibile.')}</p></div>
    <button class="card-close" type="button" aria-label="Chiudi">&times;</button>
  `;
  aggiungiAltriLoghi(card.querySelector('.card-details'),e);
  card.querySelector('.card-close').addEventListener('click',evento=>{evento.stopPropagation();chiudiCardEspansa();});
  return card;
}

eventi.forEach((e,i)=>track.appendChild(creaCardCarosello(e,i)));
const cards=[...track.querySelectorAll('.card')];

function aggiornaBadgeOspiti(){
  document.querySelectorAll('.card-ospiti').forEach(badge=>{badge.classList.toggle('multi',badge.getClientRects().length>1);});
}
aggiornaBadgeOspiti();
window.addEventListener('resize',aggiornaBadgeOspiti);

document.querySelectorAll('.card-slideshow').forEach(slideshow=>{
  const immagini=[...slideshow.querySelectorAll('img')];
  if(immagini.length<2) return;
  let indiceAttivo=0;
  setInterval(()=>{
    immagini[indiceAttivo].classList.remove('attivo');
    indiceAttivo=(indiceAttivo+1)%immagini.length;
    immagini[indiceAttivo].classList.add('attivo');
    richiediColoreTitolo();
  },4000);
});

const desktopCarousel=window.matchMedia('(min-width:761px)');

function geometriaDesktop(){
  const spazio=carouselZone.clientWidth;
  const inizio=Math.max(160,Math.min(230,spazio*.15));
  const anteprima=Math.max(42,Math.min(76,spazio*.05));
  const gap=8;
  const larghezza=Math.max(1,(spazio-inizio-anteprima-3*gap)/3);
  const altezza=Math.min(larghezza*1.4,window.innerHeight*.64);
  return {spazio,inizio,anteprima,gap,larghezza,altezza};
}

function getStep(){
  if(desktopCarousel.matches){const g=geometriaDesktop();return g.larghezza+g.gap;}
  // Mobile: distanza tra le card = 80% della larghezza della card, così le laterali si intravedono ai bordi
  const riferimento=cards.find(c=>!c.classList.contains('expanded'));
  return riferimento && riferimento.offsetWidth ? riferimento.offsetWidth*.8 : 280;
}

// ---------- Video delle card ----------
// Il <video> esiste solo mentre il trailer va: viene creato quando deve partire e tolto quando si ferma.
// Dieci video sempre presenti erano dieci livelli grafici in più e dieci decodificatori occupati,
// e rendevano lo scorrimento a scatti sui computer meno potenti.
function creaVideoCard(card){
  let video=card.querySelector('.card-video');
  if(video || !card.dataset.video) return video;
  video=document.createElement('video');
  video.className='card-video';
  video.muted=true;video.defaultMuted=true;video.loop=true;video.playsInline=true;
  video.setAttribute('muted','');video.setAttribute('playsinline','');video.setAttribute('webkit-playsinline','');
  video.preload='auto';
  if(card.dataset.zoomVideo) video.style.setProperty('--zoom-video',card.dataset.zoomVideo);
  video.src=card.dataset.video;
  const poster=card.querySelector('.card-video-poster');
  if(poster) poster.after(video); else card.querySelector('.card-poster').prepend(video);
  return video;
}
function rimuoviVideoCard(card){
  const video=card.querySelector('.card-video');
  if(video){
    video.pause();
    video.removeAttribute('src');
    video.load(); // libera subito il decodificatore
    video.remove();
  }
  const poster=card.querySelector('.card-video-poster');
  if(poster) poster.classList.remove('hidden');
}
function mostraVideoCard(card,video){
  video.classList.add('playing');
  const poster=card.querySelector('.card-video-poster');
  if(poster) poster.classList.add('hidden');
}

// Mobile: il video della card centrale parte dopo 3 secondi
let videoTimer=null;
function annullaVideoInAttesa(){clearTimeout(videoTimer);videoTimer=null;}
function avviaVideoDopo3Secondi(){
  annullaVideoInAttesa();
  const cardCorrente=cards[currentIndex];
  if(!cardCorrente.dataset.video) return;
  const esistente=cardCorrente.querySelector('.card-video');
  if(esistente && !esistente.paused) return; // sta già andando: non ricominciare
  videoTimer=setTimeout(()=>{
    if(cards[currentIndex]!==cardCorrente || expandedIndex!==null && Number(cardCorrente.dataset.index)!==expandedIndex) return;
    const video=creaVideoCard(cardCorrente);
    Promise.resolve(video.play()).then(()=>{
      if(cardCorrente.querySelector('.card-video')===video) mostraVideoCard(cardCorrente,video);
    }).catch(()=>{});
  },3000);
}

function aggiornaVideoCorrente(){
  if(desktopCarousel.matches){sincronizzaVideoHover();return;}
  annullaVideoInAttesa();
  cards.forEach((card,i)=>{
    if(!card.dataset.video) return;
    if(i===currentIndex){avviaVideoDopo3Secondi();}
    else{rimuoviVideoCard(card);}
  });
}

function update(dragOffset=0){
  const step=getStep();
  const desktop=desktopCarousel.matches;
  const g=desktop ? geometriaDesktop() : null;
  if(desktop){
    carouselZone.style.setProperty('--desktop-card-w',g.larghezza+'px');
    carouselZone.style.setProperty('--desktop-card-h',g.altezza+'px');
    carouselZone.style.setProperty('--desktop-hover-scale',Math.min(1.025,1+12/g.larghezza));
    carouselZone.style.setProperty('--desktop-start',g.inizio+'px');
    carouselZone.style.setProperty('--desktop-peek',g.anteprima+'px');
  }
  cards.forEach((card,i)=>{
    card.classList.toggle('current',i===currentIndex);
    card.classList.toggle('expanded',i===expandedIndex);
    if(i===expandedIndex){card.classList.remove('hidden');card.style.removeProperty('transform');return;}
    card.classList.remove('edge-preview');
    card.inert=false;
    const offset=i-currentIndex;
    const x=offset*step+dragOffset;
    if(desktop){
      const desktopX=g.inizio+g.larghezza/2+offset*step+dragOffset-g.spazio/2;
      const bordo=offset===-1 || offset===3;
      const visibile=offset>=-1 && offset<=3;
      card.classList.toggle('hidden',!visibile);
      card.classList.toggle('edge-preview',bordo);
      card.inert=bordo || !visibile;
      card.style.transform=`translate(-50%,-50%) translateX(${desktopX}px) scale(var(--hover-scale,1))`;
      return;
    }
    if(Math.abs(offset)>2){card.classList.add('hidden');card.style.transform=`translate(-50%,-50%) translateX(${x}px) scale(.55)`;return;}
    card.classList.remove('hidden');
    const scale=offset===0 ? 1 : (Math.abs(offset)===1 ? .8 : .6);
    const z=-Math.abs(offset)*160;
    const rot=offset*-6;
    card.style.transform=`translate(-50%,-50%) translateX(${x}px) translateZ(${z}px) rotateY(${rot}deg) scale(${scale})`;
  });
  if(desktop && isDragging) sincronizzaVideoHover();
  if(desktop) richiediColoreTitolo();
  if(!isDragging) aggiornaVideoCorrente();
  document.body.classList.toggle('card-aperta',expandedIndex!==null);
  document.getElementById('prevBtn').disabled=expandedIndex!==null||currentIndex===0;
  document.getElementById('nextBtn').disabled=expandedIndex!==null||currentIndex===eventi.length-1;
}

function move(direction){
  if(expandedIndex!==null) return;
  const nuovoIndice=currentIndex+direction;
  if(nuovoIndice<0||nuovoIndice>=eventi.length) return;
  currentIndex=nuovoIndice;
  update();
}
document.getElementById('prevBtn').addEventListener('click',()=>move(-1));
document.getElementById('nextBtn').addEventListener('click',()=>move(1));

let isDragging=false,startX=0,currentX=0,dragOffset=0,hasMoved=false;
function iniziaTrascinamento(evento){
  if(expandedIndex!==null) return;
  // Ogni nuova pressione azzera il trascinamento precedente: altrimenti, dopo aver trascinato,
  // il primo clic su "Trama" veniva scambiato per la fine del trascinamento e non apriva la card
  hasMoved=false;
  // Le frecce non avviano il trascinamento (su mobile il tocco aggiornava il carosello due volte)
  if(evento.target.closest('.nav-arrow')) return;
  if(desktopCarousel.matches && evento.target.closest('button')) return;
  isDragging=true;
  if(desktopCarousel.matches) sincronizzaVideoHover();
  hasMoved=false;
  startX=evento.touches ? evento.touches[0].clientX : evento.clientX;
  currentX=startX;dragOffset=0;
  carouselZone.classList.add('dragging');
}
function trascina(evento){
  if(!isDragging) return;
  currentX=evento.touches ? evento.touches[0].clientX : evento.clientX;
  dragOffset=currentX-startX;
  if(Math.abs(dragOffset)>5) hasMoved=true;
  update(dragOffset);
}
function terminaTrascinamento(){
  if(!isDragging) return;
  isDragging=false;
  carouselZone.classList.remove('dragging');
  const soglia=getStep()/3;
  if(dragOffset<-soglia&&currentIndex<eventi.length-1){currentIndex++;}
  else if(dragOffset>soglia&&currentIndex>0){currentIndex--;}
  dragOffset=0;
  update();
}
carouselZone.addEventListener('mousedown',iniziaTrascinamento);
carouselZone.addEventListener('mousemove',trascina);
carouselZone.addEventListener('mouseup',terminaTrascinamento);
carouselZone.addEventListener('mouseleave',terminaTrascinamento);
carouselZone.addEventListener('touchstart',iniziaTrascinamento,{passive:true});
carouselZone.addEventListener('touchmove',trascina,{passive:true});
carouselZone.addEventListener('touchend',terminaTrascinamento);
carouselZone.addEventListener('touchcancel',terminaTrascinamento);

cards.forEach(card=>{
  card.addEventListener('click',()=>{
    if(desktopCarousel.matches && card.classList.contains('edge-preview')) return;
    if(hasMoved || expandedIndex!==null) return;
    expandedIndex=Number(card.dataset.index);
    cardOriginParent=card.parentNode;
    cardOriginNext=card.nextSibling;
    document.body.appendChild(card);
    update();
  });
});

function chiudiCardEspansa(){
  if(expandedIndex!==null){
    const card=cards[expandedIndex];
    if(card&&cardOriginParent) cardOriginParent.insertBefore(card,cardOriginNext);
  }
  expandedIndex=null;
  update();
}
document.addEventListener('keydown',evento=>{if(evento.key==='Escape') chiudiCardEspansa();});
// Card aperta: un clic (o un tocco) fuori dalla card la chiude
document.addEventListener('click',evento=>{
  if(expandedIndex===null) return;
  if(evento.target.closest && evento.target.closest('.card.expanded')) return;
  chiudiCardEspansa();
});

// Desktop: i video partono al passaggio del mouse
const richiesteVideo=new WeakMap();
function fermaVideoCard(card){
  if(!card.dataset.video) return;
  richiesteVideo.set(card,(richiesteVideo.get(card)||0)+1);
  delete card.dataset.hoverAttivo;
  rimuoviVideoCard(card);
}
function avviaVideoHover(card){
  if(!desktopCarousel.matches || isDragging || document.hidden || card.inert) return;
  if(expandedIndex!==null && Number(card.dataset.index)!==expandedIndex) return;
  if(!card.dataset.video || card.classList.contains('hidden') || !card.matches(':hover')) return;
  if(card.dataset.hoverAttivo==='1') return;
  cards.forEach(altra=>{if(altra!==card) fermaVideoCard(altra);});
  const token=(richiesteVideo.get(card)||0)+1;
  richiesteVideo.set(card,token);
  card.dataset.hoverAttivo='1';
  const video=creaVideoCard(card);
  Promise.resolve(video.play()).then(()=>{
    if(richiesteVideo.get(card)!==token) return;
    if(!desktopCarousel.matches || !card.matches(':hover') || isDragging || document.hidden || card.inert){fermaVideoCard(card);return;}
    mostraVideoCard(card,video);
  }).catch(()=>{if(richiesteVideo.get(card)===token) fermaVideoCard(card);});
}
function sincronizzaVideoHover(){
  if(!desktopCarousel.matches) return;
  annullaVideoInAttesa();
  cards.forEach(card=>{
    const consentita=expandedIndex===null || Number(card.dataset.index)===expandedIndex;
    if(consentita && !card.inert && card.matches(':hover') && !card.classList.contains('hidden') && !isDragging && !document.hidden){avviaVideoHover(card);}
    else{fermaVideoCard(card);}
  });
}
cards.forEach(card=>{
  card.addEventListener('mouseenter',()=>avviaVideoHover(card));
  card.addEventListener('mousemove',()=>avviaVideoHover(card));
  card.addEventListener('mouseleave',()=>{if(desktopCarousel.matches) fermaVideoCard(card);});
  card.addEventListener('transitionend',evento=>{
    if(evento.target===card && evento.propertyName==='transform'){sincronizzaVideoHover();richiediColoreTitolo();}
  });
});

const carouselLabel=document.getElementById('carouselLabel');
document.getElementById('resetCarousel').addEventListener('click',()=>{
  if(!desktopCarousel.matches) return;
  if(expandedIndex!==null) chiudiCardEspansa();
  isDragging=false;hasMoved=false;dragOffset=0;
  carouselZone.classList.remove('dragging');
  currentIndex=indiceIniziale;
  cards.forEach(fermaVideoCard);
  update();
});

// Desktop: la scritta "Prossimi eventi" diventa bianca se sotto c'è un'immagine scura.
// Viene ricalcolata solo quando qualcosa cambia (movimento, cambio immagine, caricamento, resize).
const canvasColore=document.createElement('canvas');
canvasColore.width=1;canvasColore.height=1;
const ctxColore=canvasColore.getContext('2d',{willReadFrequently:true});
let coloreTitoloRichiesto=false;
function richiediColoreTitolo(){
  if(coloreTitoloRichiesto) return;
  coloreTitoloRichiesto=true;
  requestAnimationFrame(()=>{coloreTitoloRichiesto=false;aggiornaColoreTitolo();});
}
function aggiornaColoreTitolo(){
  if(!ctxColore || !desktopCarousel.matches || document.hidden || expandedIndex!==null) return;
  const box=carouselLabel.getBoundingClientRect();
  let somma=0,numero=0;
  for(const fx of [.2,.5,.8]) for(const fy of [.25,.75]){
    const x=box.left+box.width*fx,y=box.top+box.height*fy;
    const card=cards.find(c=>{
      if(c.classList.contains('hidden')) return false;
      const r=c.getBoundingClientRect();
      return x>=r.left && x<=r.right && y>=r.top && y<=r.bottom;
    });
    if(!card){somma+=255;numero++;continue;}
    const media=card.querySelector('.card-video.playing') || card.querySelector('.card-slideshow img.attivo') || card.querySelector('.card-video-poster') || card.querySelector('.card-poster img');
    const r=card.querySelector('.card-poster').getBoundingClientRect();
    const iw=media && (media.videoWidth || media.naturalWidth);
    const ih=media && (media.videoHeight || media.naturalHeight);
    if(!iw || !ih){somma+=255;numero++;continue;}
    const scala=Math.max(r.width/iw,r.height/ih);
    const sx=Math.max(0,Math.min(iw-1,(x-r.left+(iw*scala-r.width)/2)/scala));
    const sy=Math.max(0,Math.min(ih-1,(y-r.top+(ih*scala-r.height)/2)/scala));
    try{
      ctxColore.drawImage(media,sx,sy,1,1,0,0,1,1);
      const p=ctxColore.getImageData(0,0,1,1).data;
      const opacita=parseFloat(getComputedStyle(card).opacity) || 1;
      somma+=(.2126*p[0]+.7152*p[1]+.0722*p[2])*opacita+255*(1-opacita);
      numero++;
    }catch(errore){somma+=255;numero++;}
  }
  const luminosita=numero ? somma/numero : 255;
  const soglia=carouselLabel.classList.contains('su-scuro') ? 155 : 135;
  carouselLabel.classList.toggle('su-scuro',luminosita<soglia);
}
track.querySelectorAll('img').forEach(img=>{if(!img.complete) img.addEventListener('load',richiediColoreTitolo,{once:true});});

function adattaCaroselloAllaFinestra(){
  if(desktopCarousel.matches){
    const larghezza=document.documentElement.clientWidth;
    const main=carouselZone.closest('main');
    const margine=main.getBoundingClientRect().width/2-larghezza/2-parseFloat(getComputedStyle(main).paddingLeft);
    carouselZone.style.width=larghezza+'px';
    carouselZone.style.marginLeft=margine+'px';
    carouselZone.style.marginRight=margine+'px';
  }else{
    carouselZone.style.removeProperty('width');
    carouselZone.style.removeProperty('margin-left');
    carouselZone.style.removeProperty('margin-right');
  }
  update();
}
window.addEventListener('resize',adattaCaroselloAllaFinestra);
desktopCarousel.addEventListener('change',()=>{cards.forEach(fermaVideoCard);annullaVideoInAttesa();adattaCaroselloAllaFinestra();});
document.addEventListener('visibilitychange',()=>{if(desktopCarousel.matches){sincronizzaVideoHover();richiediColoreTitolo();}});

// ---------- Video in evidenza ----------
// Compare solo se in eventi.js è impostato videoInEvidenza.video

function inizializzaVideoInEvidenza(){
  const dati=typeof videoInEvidenza!=='undefined' ? videoInEvidenza : null;
  const file=dati && typeof dati.video==='string' ? dati.video.trim() : '';
  if(!file) return;
  const sezione=document.createElement('section');
  sezione.id='home-video';
  sezione.className='home-video home-panel';
  sezione.setAttribute('aria-label',dati.titolo || 'Video in evidenza');
  const titolo=dati.titolo ? `<h2>${escapeHtml(dati.titolo)}</h2>` : '';
  const descrizione=dati.descrizione ? `<p>${escapeHtml(dati.descrizione)}</p>` : '';
  sezione.innerHTML=`
    ${titolo||descrizione ? `<div class="section-title">${titolo}${descrizione}</div>` : ''}
    <video class="home-video-player" src="${escapeHtml(file)}" ${dati.poster ? `poster="${escapeHtml(dati.poster)}"` : ''} controls playsinline preload="metadata"></video>
  `;
  document.getElementById('home-eventi').after(sezione);
}
inizializzaVideoInEvidenza();

// ---------- Sostenitori ----------

function inizializzaSostenitori(){
  const grid=document.getElementById('sostenitoriEGrid');
  if(!grid || typeof sostenitoriBox==='undefined') return;
  sostenitoriBox.forEach(box=>{
    const boxElemento=document.createElement('div');
    boxElemento.className='sostenitori-e-box';
    const stage=document.createElement('div');
    stage.className='sostenitori-e-stage';
    boxElemento.appendChild(stage);
    const loghi=[];
    (box.loghi || []).forEach(sostenitore=>{
      const elemento=document.createElement('div');
      elemento.className='sostenitori-e-logo';
      const nome=sostenitore.nome || 'Sostenitore';
      const immagine=document.createElement('img');
      immagine.src=sostenitore.logo;
      immagine.alt=nome;
      immagine.title=nome;
      immagine.loading='lazy';
      if(sostenitore.sito){
        const link=document.createElement('a');
        link.href=sostenitore.sito;
        link.target='_blank';
        link.rel='noopener';
        link.setAttribute('aria-label',nome+' (si apre in una nuova scheda)');
        link.appendChild(immagine);
        elemento.appendChild(link);
      }else{
        elemento.appendChild(immagine);
      }
      stage.appendChild(elemento);
      loghi.push(elemento);
    });
    grid.appendChild(boxElemento);
    let indiceAttivo=0;
    const mostra=indice=>loghi.forEach((logo,i)=>{
      const attivo=i===indice;
      logo.classList.toggle('attivo',attivo);
      logo.inert=!attivo;
    });
    mostra(indiceAttivo);
    if(loghi.length>1){
      setInterval(()=>{indiceAttivo=(indiceAttivo+1)%loghi.length;mostra(indiceAttivo);},5000);
    }
  });
}
inizializzaSostenitori();

// ---------- Desktop: footer dentro il pannello finale ----------
// Su desktop il footer entra nel pannello "sostenitori + corsi" così che stiano in un'unica schermata;
// su mobile torna nella sua posizione originale in fondo alla pagina.

function inizializzaSezioniHome(){
  const finale=document.getElementById('home-finale');
  const footer=document.querySelector('body > footer');
  if(!finale || !footer) return;
  const posizioneFooter=document.createComment('Posizione del footer su mobile');
  footer.before(posizioneFooter);
  function sistemaFooter(){
    if(desktopCarousel.matches){
      finale.style.setProperty('--home-footer-width',document.documentElement.clientWidth+'px');
      if(footer.parentElement!==finale) finale.appendChild(footer);
    }else{
      finale.style.removeProperty('--home-footer-width');
      if(footer.previousSibling!==posizioneFooter) posizioneFooter.after(footer);
    }
  }
  sistemaFooter();
  window.addEventListener('resize',sistemaFooter);
  desktopCarousel.addEventListener('change',sistemaFooter);
}
inizializzaSezioniHome();

// ---------- Intro ----------
// Normale: il logo resta 2,5 secondi e poi sparisce.
// Modalità presentazione (indirizzo con ?presentazione, es. angolodiamelie.it/?presentazione):
// compare il vecchio logo, fermo; 1ª barra spaziatrice → si trasforma nel logo nuovo;
// 2ª barra spaziatrice → si svela il sito.
// In entrambi i casi il sito si svela così: il logo si dissolve e poi lo sfondo bianco sfuma (vedi home.css).
const introOverlay=document.getElementById('introOverlay');
const modalitaPresentazione=new URLSearchParams(location.search).has('presentazione');

function chiudiIntro(){
  introOverlay.classList.add('hidden');
  document.body.style.overflow='';
  setTimeout(()=>introOverlay.remove(),1500);
}

// --- Presentazione: vecchio logo → logo nuovo → sito, a ogni pressione della barra spaziatrice ---
// Il vecchio logo è la stessa illustrazione di Amélie contenuta nel logo nuovo: alla prima pressione
// scivola esattamente sopra l'illustrazione del logo nuovo e sfuma in esso.
// Posizione dell'illustrazione nel file del logo nuovo (misurata confrontando le due immagini).
// Se cambi il file del logo nuovo, questi numeri vanno rimisurati.
const VECCHIO_LOGO={
  file:'amelie-logo-vecchio.JPG',
  proporzione:600/843,                 // larghezza / altezza del vecchio logo
  tela:{larghezza:701,altezza:456},    // viewBox del logo nuovo (L-angolo-di-Amelie_logo2.svg)
  riquadro:{x:160.2,y:-118,larghezza:385,altezza:541} // dove cade il vecchio logo, in unità del logo nuovo
};

function rettangoloFinaleVecchioLogo(){
  // dove deve stare il vecchio logo per coincidere con l'illustrazione del logo nuovo (sfondo "contain", centrato)
  const r=introOverlay.querySelector('.intro-logo').getBoundingClientRect();
  const {tela,riquadro}=VECCHIO_LOGO;
  const k=Math.min(r.width/tela.larghezza,r.height/tela.altezza);
  const x0=r.left+(r.width-tela.larghezza*k)/2, y0=r.top+(r.height-tela.altezza*k)/2;
  return {left:x0+riquadro.x*k,top:y0+riquadro.y*k,width:riquadro.larghezza*k,height:riquadro.altezza*k};
}
function rettangoloInizialeVecchioLogo(){
  // all'apertura: grande e al centro dello schermo
  const altezza=Math.min(innerHeight*.72,innerWidth*.8/VECCHIO_LOGO.proporzione);
  const larghezza=altezza*VECCHIO_LOGO.proporzione;
  return {left:(innerWidth-larghezza)/2,top:(innerHeight-altezza)/2,width:larghezza,height:altezza};
}

function avviaPresentazione(){
  introOverlay.classList.add('presentazione');
  const vecchio=document.createElement('img');
  vecchio.className='intro-logo-vecchio';
  vecchio.alt='';
  vecchio.decoding='async';
  introOverlay.appendChild(vecchio);
  let fase=0; // 0 = vecchio logo, 1 = logo nuovo, 2 = sito

  // Il vecchio logo sta sempre nella posizione finale; nella fase 0 una trasformazione lo porta al centro, grande
  function posiziona(){
    const fine=rettangoloFinaleVecchioLogo();
    Object.assign(vecchio.style,{left:fine.left+'px',top:fine.top+'px',width:fine.width+'px',height:fine.height+'px'});
    if(fase===0){
      const inizio=rettangoloInizialeVecchioLogo();
      const scala=inizio.width/fine.width;
      vecchio.style.transform=`translate(${inizio.left-fine.left}px,${inizio.top-fine.top}px) scale(${scala})`;
    }else{
      vecchio.style.transform='none';
    }
  }
  posiziona();
  window.addEventListener('resize',posiziona);
  vecchio.addEventListener('load',()=>vecchio.classList.add('pronto'),{once:true});
  vecchio.src=VECCHIO_LOGO.file;

  let pronto=false;
  setTimeout(()=>{pronto=true;},900); // pressioni accettate solo a logo comparso
  const allaBarraSpaziatrice=evento=>{
    if(evento.code!=='Space' && evento.key!==' ') return;
    evento.preventDefault();
    if(evento.repeat || !pronto) return;
    pronto=false;
    if(fase===0){
      fase=1;
      introOverlay.classList.add('logo-nuovo'); // il vecchio scivola sul nuovo e sfuma (transizioni in home.css)
      posiziona();
      setTimeout(()=>{pronto=true;},1300);
    }else if(fase===1){
      fase=2;
      document.removeEventListener('keydown',allaBarraSpaziatrice);
      window.removeEventListener('resize',posiziona);
      chiudiIntro();
    }
  };
  document.addEventListener('keydown',allaBarraSpaziatrice);
}

if(introOverlay){
  document.body.style.overflow='hidden';
  if(modalitaPresentazione) avviaPresentazione();
  else setTimeout(chiudiIntro,2500);
}

adattaCaroselloAllaFinestra();
