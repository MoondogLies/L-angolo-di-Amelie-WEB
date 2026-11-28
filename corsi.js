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
      <img src="${escapeHtml(corso.immagine)}" alt="${escapeHtml(nomeCorso)}">
      <div class="course-body">
        <span class="course-tag">${escapeHtml(nomeCorso)}</span>
        <p>${escapeHtml(corso.descrizione)}</p>
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
  chiudiSchedaCorso(true);

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
            <h4>${escapeHtml(modulo.nome)}</h4>
            <p><strong>Docente:</strong> ${escapeHtml(modulo.docente || 'Non disponibile')}</p>
            <p><strong>Date:</strong> ${dataModulo}</p>
          </div>
        `;
      }).join('')}
    </div>
  ` : '';

  overlay.innerHTML=`
    <div class="course-info-modal" role="dialog" aria-modal="true">
      <button class="course-info-close" type="button" aria-label="Chiudi">&times;</button>
      <h3>${escapeHtml(nomeCorso)}</h3>
      <p class="course-info-text">${escapeHtml(informazioni)}</p>

      ${boxModuli}

      ${email ? `
      <div class="course-info-row">
        <strong>Per informazioni scrivi a</strong>
        <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
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


// istantanea: senza animazione (tasto Esc, o una scheda che ne sostituisce un'altra)
function chiudiSchedaCorso(istantanea=false){
  const overlayEsistente=document.querySelector('.course-info-overlay:not(.in-chiusura)');
  if(!overlayEsistente) return;
  document.body.style.overflow='';
  if(istantanea===true){
    overlayEsistente.remove();
    return;
  }
  overlayEsistente.classList.add('in-chiusura');
  setTimeout(()=>overlayEsistente.remove(),180);
}


document.addEventListener('keydown',evento=>{
  if(evento.key==='Escape'){
    chiudiSchedaCorso(true);
  }
});


inizializzaCorsi();
