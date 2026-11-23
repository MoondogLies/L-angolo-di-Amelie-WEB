function inizializzaCorsi(){
  const grigliaCorsi=document.querySelector('.course-grid');

  if(!grigliaCorsi || !Array.isArray(corsi)){
    return;
  }

  grigliaCorsi.innerHTML='';

  corsi.forEach(corso=>{
    const card=document.createElement('article');
    card.className='course-card';
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');

    const nomeCorso=corso.categoria || corso.titolo || 'Corso';
    const contatti=corso.contatti || {};
    const moduli=Array.isArray(corso.moduli) ? corso.moduli : [];

    card.innerHTML=`
      <img src="${corso.immagine}" alt="${nomeCorso}">
      <div class="course-body">
        <span class="course-tag">${nomeCorso}</span>
        <p>${corso.descrizione}</p>
      </div>
    `;

    card.addEventListener('click',()=>{
      apriSchedaCorso(nomeCorso,contatti,moduli);
    });

    card.addEventListener('keydown',evento=>{
      if(evento.key==='Enter' || evento.key===' '){
        evento.preventDefault();
        apriSchedaCorso(nomeCorso,contatti,moduli);
      }
    });

    grigliaCorsi.appendChild(card);
  });
}


function formattaDataBreve(iso){
  if(!iso) return 'da definire';

  const data=new Date(iso+'T00:00:00');
  const mesi=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

  return `${data.getDate()} ${mesi[data.getMonth()]} ${data.getFullYear()}`;
}


function apriSchedaCorso(nomeCorso,contatti,moduli){
  chiudiSchedaCorso();

  const overlay=document.createElement('div');
  overlay.className='course-info-overlay';

  const email=contatti.email || '';
  const informazioni=contatti.informazioni || 'Informazioni in arrivo.';

  const oggi=new Date();
  oggi.setHours(0,0,0,0);

  const boxModuli=moduli.length ? `
    <div class="course-modules">
      ${moduli.map(modulo=>{
        const fine=new Date(modulo.fine+'T23:59:59');
        const concluso=modulo.fine && fine<oggi;

        const dataModulo=!modulo.inizio && !modulo.fine
          ? 'da definire'
          : `${formattaDataBreve(modulo.inizio)} – ${formattaDataBreve(modulo.fine)}`;

        return `
          <div class="course-module${concluso?' scaduto':''}">
            <h4>${modulo.nome}</h4>
            <p><strong>Docente:</strong> ${modulo.docente || 'Non disponibile'}</p>
            <p><strong>Date:</strong> ${dataModulo}</p>
          </div>
        `;
      }).join('')}
    </div>
  ` : '';

  overlay.innerHTML=`
    <div class="course-info-modal" role="dialog" aria-modal="true">
      <button class="course-info-close" type="button" aria-label="Chiudi">&times;</button>
      <h3>${nomeCorso}</h3>
      <p class="course-info-text">${informazioni}</p>

      ${boxModuli}

      ${email ? `
      <div class="course-info-row">
        <strong>Per informazioni scrivi a</strong>
        <a href="mailto:${email}">${email}</a>
      </div>` : ''}
    </div>
  `;

  overlay.querySelector('.course-info-close').addEventListener('click',chiudiSchedaCorso);

  overlay.addEventListener('click',evento=>{
    if(evento.target===overlay){
      chiudiSchedaCorso();
    }
  });

  document.body.appendChild(overlay);
  document.body.style.overflow='hidden';
}


function chiudiSchedaCorso(){
  const overlayEsistente=document.querySelector('.course-info-overlay');

  if(overlayEsistente){
    overlayEsistente.remove();
    document.body.style.overflow='';
  }
}


document.addEventListener('keydown',evento=>{
  if(evento.key==='Escape'){
    chiudiSchedaCorso();
  }
});


inizializzaCorsi();

function inizializzaSezioniHome(){
  const main=document.querySelector('main');
  const carosello=document.getElementById('carouselZone');
  if(!main || !carosello || main.dataset.homeSnapReady==='true') return;
  main.dataset.homeSnapReady='true';
  document.documentElement.classList.add('home-snap');

  const stile=document.createElement('style');
  stile.id='home-sezioni-style';
  stile.textContent=`
    .home-events,.home-corsi-content{display:contents}
    .programma-btn-wrap[hidden]{display:none}
    header .home-calendar-link{position:absolute;top:calc(20px + env(safe-area-inset-top,0px));right:calc(24px + env(safe-area-inset-right,0px));width:48px;height:48px;display:flex;align-items:center;justify-content:center;pointer-events:auto;color:var(--rosso);background:rgba(255,255,255,.94);border:1px solid rgba(200,16,46,.2);border-radius:14px;box-shadow:0 5px 18px rgba(0,0,0,.12);transition:transform .2s ease,background .2s ease,color .2s ease}
    header .home-calendar-link svg{width:27px;height:27px;display:block}
    header .home-calendar-link:hover{transform:translateY(-2px);background:var(--rosso);color:#fff}
    header .home-calendar-link:focus-visible{outline:3px solid var(--rosso);outline-offset:4px}
    body.card-aperta header .home-calendar-link{pointer-events:none}
    @media(max-width:760px){header .home-calendar-link{top:calc(14px + env(safe-area-inset-top,0px));right:calc(14px + env(safe-area-inset-right,0px));width:44px;height:44px}}
    @media(min-width:761px){
      html.home-snap{scroll-snap-type:y proximity}
      html.home-snap main{padding-bottom:0}
      .carousel-label button{position:relative;display:inline-block;transform-origin:left center;transition:transform .22s ease,filter .22s ease}
      .carousel-label button::after{content:"";position:absolute;left:0;right:0;bottom:-7px;height:2px;background:currentColor;transform:scaleX(0);transform-origin:left center;transition:transform .22s ease;pointer-events:none}
      .carousel-label button:hover,.carousel-label button:focus-visible{transform:translateX(4px) scale(1.035);filter:drop-shadow(0 2px 5px rgba(0,0,0,.18))}
      .carousel-label button:hover::after,.carousel-label button:focus-visible::after{transform:scaleX(1)}
      .carousel-label button:active{transform:translateX(2px) scale(.99)}
      main > .home-panel{scroll-snap-align:start;scroll-snap-stop:normal;scroll-margin-top:24px;min-height:calc(100svh - 48px);margin-top:0;padding-top:32px;padding-bottom:48px}
      main > .home-events{display:block;padding-top:0;scroll-margin-top:calc(clamp(160px,12vw,200px) + 28px)}
      main > .sostenitori-e-section.home-panel,main > .sostenitori.home-panel,main > .corsi.home-panel{display:flex;flex-direction:column;justify-content:center}
      main > .sostenitori-e-section.home-panel > *,main > .sostenitori.home-panel > *,main > .corsi.home-panel > *{flex-shrink:0}
      main > .corsi.home-panel{min-height:100svh;scroll-margin-top:0;padding-bottom:0;justify-content:flex-start}
      main > .corsi.home-panel > .home-corsi-content{display:flex;flex:1 0 auto;flex-direction:column;justify-content:center;padding-bottom:24px}
      .home-corsi-content > *{flex-shrink:0}
      main > .corsi.home-panel > .home-corsi-content{gap:clamp(28px,5vh,56px);padding-top:8px}
      .home-corsi-content > .home-sostenitori-unita{margin:0}
      .home-sostenitori-unita .section-title,.corsi.home-panel .section-title{margin-bottom:16px}
      .home-sostenitori-unita .sostenitori-e-stage{height:clamp(80px,12vh,130px)}
      .home-sostenitori-unita .sostenitori-e-logo img{max-height:clamp(70px,11vh,115px)}
      .home-sostenitori-unita .dona-wrap{margin-top:clamp(12px,2.5vh,28px)}
      .corsi.home-panel .course-card img{height:clamp(120px,18vh,200px)}
      html.home-snap footer{scroll-snap-align:none}
      main > .corsi.home-panel > footer{flex:0 0 auto;margin-top:0;width:var(--home-footer-width,100%);margin-left:calc((100% - var(--home-footer-width,100%))/2);margin-right:calc((100% - var(--home-footer-width,100%))/2)}
    }
    @media(prefers-reduced-motion:reduce){
      .carousel-label button,.carousel-label button::after,header .home-calendar-link{transition:none}
      .carousel-label button:hover,.carousel-label button:focus-visible,.carousel-label button:active,header .home-calendar-link:hover{transform:none}
    }
  `;
  document.head.appendChild(stile);

  const titoloPagina=main.querySelector('.page-title');
  const suggerimento=main.querySelector('.hint');
  if(suggerimento) suggerimento.remove();
  const pulsanteProgramma=main.querySelector('.programma-btn-wrap');
  const headerHome=document.querySelector('header');
  if(headerHome && !document.getElementById('headerCalendar')){
    const calendario=(pulsanteProgramma && pulsanteProgramma.querySelector('a')) || document.createElement('a');
    calendario.id='headerCalendar';
    calendario.className='home-calendar-link';
    calendario.setAttribute('href','eventi.html');
    calendario.setAttribute('aria-label','Tutti gli eventi');
    calendario.setAttribute('title','Calendario degli eventi');
    calendario.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18M8 15h2M14 15h2M8 18h2M14 18h2"/></svg>';
    headerHome.appendChild(calendario);
  }
  if(pulsanteProgramma) pulsanteProgramma.hidden=true;
  const sezioneEventi=document.createElement('section');
  sezioneEventi.id='home-eventi';
  sezioneEventi.className='home-events home-panel';
  sezioneEventi.setAttribute('aria-label','Eventi');
  main.insertBefore(sezioneEventi,titoloPagina || carosello);
  [titoloPagina,carosello,pulsanteProgramma].forEach(elemento=>{
    if(elemento) sezioneEventi.appendChild(elemento);
  });

  const desktopHome=window.matchMedia('(min-width:761px)');
  const footerHome=document.querySelector('body > footer');
  const posizioneFooter=document.createComment('Posizione originale del footer mobile');
  if(footerHome) footerHome.before(posizioneFooter);

  function sistemaFooter(corsiSezione){
    if(!footerHome || !corsiSezione) return;
    if(desktopHome.matches){
      let contenuto=corsiSezione.querySelector(':scope > .home-corsi-content');
      if(!contenuto){
        contenuto=document.createElement('div');
        contenuto.className='home-corsi-content';
        [...corsiSezione.childNodes].forEach(nodo=>{
          if(nodo!==footerHome) contenuto.appendChild(nodo);
        });
        corsiSezione.appendChild(contenuto);
      }
      corsiSezione.style.setProperty('--home-footer-width',document.documentElement.clientWidth+'px');
      if(footerHome.parentElement!==corsiSezione) corsiSezione.appendChild(footerHome);
    }else{
      if(footerHome.parentNode!==posizioneFooter.parentNode) posizioneFooter.after(footerHome);
      const contenuto=corsiSezione.querySelector(':scope > .home-corsi-content');
      if(contenuto){
        while(contenuto.firstChild) corsiSezione.insertBefore(contenuto.firstChild,contenuto);
        contenuto.remove();
      }
      corsiSezione.style.removeProperty('--home-footer-width');
    }
  }

  function aggiornaSezioniHome(){
    const sostenitori=main.querySelector('.sostenitori-e-section, .sostenitori');
    const corsiSezione=main.querySelector('.corsi');
    // Desktop: due pannelli (1. eventi, 2. sostenitori + corsi + footer).
    // Mobile: sezioni in sequenza come prima (eventi, sostenitori, corsi, footer).
    const unisciSostenitori=desktopHome.matches && sostenitori && corsiSezione;
    if(sostenitori){
      sostenitori.id='home-sostenitori';
      sostenitori.setAttribute('aria-label','I nostri sostenitori');
      sostenitori.classList.toggle('home-panel',!unisciSostenitori);
      sostenitori.classList.toggle('home-sostenitori-unita',!!unisciSostenitori);
      if(!unisciSostenitori && (sostenitori.parentElement!==main || sezioneEventi.nextElementSibling!==sostenitori)){
        sezioneEventi.after(sostenitori);
      }
    }
    if(corsiSezione){
      corsiSezione.id='home-corsi';
      corsiSezione.classList.add('home-panel');
      corsiSezione.setAttribute('aria-label',unisciSostenitori?'Sostenitori e corsi':'I nostri corsi');
      const precedente=(sostenitori && !unisciSostenitori) ? sostenitori : sezioneEventi;
      if(corsiSezione.parentElement!==main || precedente.nextElementSibling!==corsiSezione){
        precedente.after(corsiSezione);
      }
      sistemaFooter(corsiSezione);
      if(unisciSostenitori){
        const contenuto=corsiSezione.querySelector(':scope > .home-corsi-content');
        if(contenuto && contenuto.firstElementChild!==sostenitori) contenuto.prepend(sostenitori);
      }
    }
  }
  aggiornaSezioniHome();
  const observer=new MutationObserver(aggiornaSezioniHome);
  observer.observe(main,{childList:true,subtree:true});
  window.addEventListener('resize',aggiornaSezioniHome);
  desktopHome.addEventListener('change',aggiornaSezioniHome);
  if(typeof adattaCaroselloAllaFinestra==='function') adattaCaroselloAllaFinestra();
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',inizializzaSezioniHome,{once:true});
}else{
  inizializzaSezioniHome();
}
