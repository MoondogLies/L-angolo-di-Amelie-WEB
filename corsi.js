function inizializzaCorsi(){
  const grigliaCorsi=document.querySelector('.course-grid');

  if(!grigliaCorsi || !Array.isArray(corsi)){
    return;
  }

  grigliaCorsi.innerHTML='';

  corsi.forEach(corso=>{
    const card=document.createElement('article');
    card.className='course-card';

    card.innerHTML=`
      <img src="${corso.immagine}" alt="${corso.titolo}">
      <div class="course-body">
        <span class="course-tag">${corso.categoria}</span>
        <h3>${corso.titolo}</h3>
        <p>${corso.descrizione}</p>
      </div>
    `;

    grigliaCorsi.appendChild(card);
  });
}


inizializzaCorsi();