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
    .home-events{display:contents}
    @media(min-width:761px){
      html.home-snap{scroll-snap-type:y proximity}
      .carousel-label button{position:relative;display:inline-block;transform-origin:left center;transition:transform .22s ease,filter .22s ease}
      .carousel-label button::after{content:"";position:absolute;left:0;right:0;bottom:-7px;height:2px;background:currentColor;transform:scaleX(0);transform-origin:left center;transition:transform .22s ease;pointer-events:none}
      .carousel-label button:hover,.carousel-label button:focus-visible{transform:translateX(4px) scale(1.035);filter:drop-shadow(0 2px 5px rgba(0,0,0,.18))}
      .carousel-label button:hover::after,.carousel-label button:focus-visible::after{transform:scaleX(1)}
      .carousel-label button:active{transform:translateX(2px) scale(.99)}
      main > .home-panel{scroll-snap-align:start;scroll-snap-stop:normal;scroll-margin-top:24px;min-height:calc(100svh - 48px);margin-top:0;padding-top:32px;padding-bottom:48px}
      main > .home-events{display:block;padding-top:0;scroll-margin-top:calc(clamp(160px,12vw,200px) + 28px)}
      main > .sostenitori-e-section.home-panel,main > .sostenitori.home-panel,main > .corsi.home-panel{display:flex;flex-direction:column;justify-content:center}
      main > .sostenitori-e-section.home-panel > *,main > .sostenitori.home-panel > *,main > .corsi.home-panel > *{flex-shrink:0}
      html.home-snap footer{scroll-snap-align:end}
    }
    @media(prefers-reduced-motion:reduce){
      .carousel-label button,.carousel-label button::after{transition:none}
      .carousel-label button:hover,.carousel-label button:focus-visible,.carousel-label button:active{transform:none}
    }
  `;
  document.head.appendChild(stile);

  const titoloPagina=main.querySelector('.page-title');
  const suggerimento=main.querySelector('.hint');
  const pulsanteProgramma=main.querySelector('.programma-btn-wrap');
  const sezioneEventi=document.createElement('section');
  sezioneEventi.id='home-eventi';
  sezioneEventi.className='home-events home-panel';
  sezioneEventi.setAttribute('aria-label','Eventi');
  main.insertBefore(sezioneEventi,titoloPagina || carosello);
  [titoloPagina,carosello,suggerimento,pulsanteProgramma].forEach(elemento=>{
    if(elemento) sezioneEventi.appendChild(elemento);
  });

  function aggiornaSezioniHome(){
    const sostenitori=main.querySelector('.sostenitori-e-section, .sostenitori');
    const corsiSezione=main.querySelector('.corsi');
    if(sostenitori){
      sostenitori.id='home-sostenitori';
      sostenitori.classList.add('home-panel');
      sostenitori.setAttribute('aria-label','I nostri sostenitori');
      if(sostenitori.parentElement!==main || sezioneEventi.nextElementSibling!==sostenitori){
        sezioneEventi.after(sostenitori);
      }
    }
    if(corsiSezione){
      corsiSezione.id='home-corsi';
      corsiSezione.classList.add('home-panel');
      corsiSezione.setAttribute('aria-label','I nostri corsi');
      const precedente=sostenitori || sezioneEventi;
      if(corsiSezione.parentElement!==main || precedente.nextElementSibling!==corsiSezione){
        precedente.after(corsiSezione);
      }
    }
  }
  aggiornaSezioniHome();
  const observer=new MutationObserver(aggiornaSezioniHome);
  observer.observe(main,{childList:true,subtree:true});
  if(typeof adattaCaroselloAllaFinestra==='function') adattaCaroselloAllaFinestra();
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',inizializzaSezioniHome,{once:true});
}else{
  inizializzaSezioniHome();
}
