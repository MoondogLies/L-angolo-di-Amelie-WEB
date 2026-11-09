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

    card.innerHTML=`
      <img src="${corso.immagine}" alt="${nomeCorso}">
      <div class="course-body">
        <span class="course-tag">${nomeCorso}</span>
        <p>${corso.descrizione}</p>
      </div>
    `;

    card.addEventListener('click',()=>{
      apriSchedaCorso(nomeCorso,contatti);
    });

    card.addEventListener('keydown',evento=>{
      if(evento.key==='Enter' || evento.key===' '){
        evento.preventDefault();
        apriSchedaCorso(nomeCorso,contatti);
      }
    });

    grigliaCorsi.appendChild(card);
  });
}


function apriSchedaCorso(nomeCorso,contatti){
  chiudiSchedaCorso();

  const overlay=document.createElement('div');
  overlay.className='course-info-overlay';

  const referente=contatti.referente || 'Non disponibile';
  const telefono=contatti.telefono || '';
  const email=contatti.email || '';
  const informazioni=contatti.informazioni || 'Informazioni in arrivo.';

  overlay.innerHTML=`
    <div class="course-info-modal" role="dialog" aria-modal="true">
      <button class="course-info-close" type="button" aria-label="Chiudi">&times;</button>
      <h3>${nomeCorso}</h3>
      <p class="course-info-text">${informazioni}</p>

      <div class="course-info-row">
        <strong>Referente</strong>
        <span>${referente}</span>
      </div>

      ${telefono ? `
      <div class="course-info-row">
        <strong>Telefono</strong>
        <a href="tel:${telefono.replace(/\s/g,'')}">${telefono}</a>
      </div>` : ''}

      ${email ? `
      <div class="course-info-row">
        <strong>Email</strong>
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